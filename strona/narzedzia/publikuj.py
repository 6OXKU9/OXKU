# Przygotowuje stronę do publikacji: python3 narzedzia/publikuj.py [--test] [katalog_wyjściowy]
# Domyślnie zapisuje do /mnt/project-files/strona-publikacja (ten katalog wrzucasz na hosting).
#
# Co robi:
#  - kopiuje stronę (index.html, css, js),
#  - dla każdej analizy tworzy osobną stronę z własnym adresem, tytułem i opisem dla Google
#    oraz podglądem w mediach społecznościowych (Open Graph):
#      /analiza/<id>/          wersja polska
#      /en/analysis/<id>/      wersja angielska (gdy analiza ma pola _en)
#  - tworzy sitemap.xml i robots.txt.
# Adres strony bierze z pola `domena` w js/ustawienia.js. Bez niego używa https://example.com i ostrzega.
import html, json, os, shutil, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
# --test: wersja próbna, ukryta przed Google (noindex + robots.txt blokujący roboty), domyślnie do strona-test.
TEST = '--test' in sys.argv
ARGS = [x for x in sys.argv[1:] if x != '--test']
OUT = ARGS[0] if ARGS else os.path.join(os.path.dirname(ROOT), 'strona-test' if TEST else 'strona-publikacja')

dump = subprocess.run(['node', '-e', '''
global.window = {};
for (const f of ["ustawienia", "instrumenty", "analizy"]) require(process.argv[1] + "/js/" + f + ".js");
console.log(JSON.stringify({ cfg: window.USTAWIENIA, ins: window.INSTRUMENTY, an: window.ANALIZY }));
''', ROOT], capture_output=True, text=True, check=True).stdout
D = json.loads(dump)
CFG, INS, AN = D['cfg'], {i['id']: i for i in D['ins']}, sorted(D['an'], key=lambda a: a['data'], reverse=True)
DOM = (CFG.get('domena') or '').rstrip('/')
if not DOM:
    print('UWAGA: brak domeny w js/ustawienia.js, używam https://example.com')
    DOM = 'https://example.com'

e = lambda s: html.escape(str(s if s is not None else ''), quote=True)
MIES = {'pl': ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
        'en': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
KIER = {'wzrostowy': 'bullish', 'spadkowy': 'bearish', 'neutralny': 'neutral'}
WYN = {'trafiona': 'hit', 'nietrafiona': 'miss', 'w toku': 'open', 'bez rozstrzygnięcia': 'no result'}
FONTS = 'https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap'

def pole(o, k, lang):
    return o.get(k + '_en') if lang == 'en' and o.get(k + '_en') is not None else o.get(k)

def data(d, lang):
    r, m, dz = d.split('-')
    return f'{int(dz)} {MIES[lang][int(m) - 1]} {r}'

def cena(v, ins, lang):
    d = ins.get('dec', 2)
    s = f'{v:,.{d}f}'
    return s if lang == 'en' else s.replace(',', ' ').replace('.', ',')

def adres(a, lang):
    return f'{DOM}/en/analysis/{a["id"]}/' if lang == 'en' else f'{DOM}/analiza/{a["id"]}/'

def strona(a, lang):
    L = (lambda pl, en: en if lang == 'en' else pl)
    ins = INS.get(a['instrument'], {})
    up = '../../../' if lang == 'en' else '../../'
    q = '?lang=en' if lang == 'en' else ''
    app = f'{up}index.html{q}#a-{a["id"]}'
    tytul, lead = pole(a, 'tytul', lang), pole(a, 'lead', lang)
    kier = KIER.get(a['kierunek'], a['kierunek']) if lang == 'en' else a['kierunek']
    status = (a.get('wynik') or {}).get('status') or 'w toku'
    wynik = WYN.get(status, status) if lang == 'en' else status
    p = a.get('poziomy', {})
    poz = ''.join(f'<tr><td class="lv-up">{L("Opór", "Resistance")}</td><td class="num">{cena(v, ins, lang)}</td></tr>' for v in sorted(p.get('opory', []), reverse=True))
    if p.get('cena') is not None:
        poz += f'<tr class="now"><td>{L("Cena przy publikacji", "Price at publication")}</td><td class="num">{cena(p["cena"], ins, lang)}</td></tr>'
    poz += ''.join(f'<tr><td class="lv-dn">{L("Wsparcie", "Support")}</td><td class="num">{cena(v, ins, lang)}</td></tr>' for v in sorted(p.get('wsparcia', []), reverse=True))
    scen = ''.join(f'<li><span><span class="bias bias--{e(s["typ"])}">{e(KIER.get(s["typ"], s["typ"]) if lang == "en" else s["typ"])}</span></span><p>{e(pole(s, "tekst", lang))}</p></li>' for s in a.get('scenariusze', []))
    tresc = ''.join(f'<p>{e(t)}</p>' for t in (pole(a, 'tresc', lang) or []))
    ld = {'@context': 'https://schema.org', '@type': 'Article', 'headline': tytul, 'description': lead, 'datePublished': a['data'],
          'inLanguage': lang, 'author': {'@type': 'Organization', 'name': 'AnalizyRynku'}, 'mainEntityOfPage': adres(a, lang)}
    alt = ''.join(f'<link rel="alternate" hreflang="{l}" href="{adres(a, l)}">' for l in ('pl', 'en') if l == 'pl' or a.get('tytul_en'))
    return f'''<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(tytul)} · {e(ins.get("symbol"))} · AnalizyRynku</title>
<meta name="description" content="{e(lead)}">
<link rel="canonical" href="{adres(a, lang)}">{alt}
<meta property="og:type" content="article">
<meta property="og:site_name" content="AnalizyRynku">
<meta property="og:title" content="{e(tytul)}">
<meta property="og:description" content="{e(lead)}">
<meta property="og:url" content="{adres(a, lang)}">
<meta property="og:locale" content="{L("pl_PL", "en_GB")}">
<meta property="article:published_time" content="{a["data"]}">
<meta name="twitter:card" content="summary">
<script type="application/ld+json">{json.dumps(ld, ensure_ascii=False).replace("</", "<\\/")}</script>
<link rel="stylesheet" href="{FONTS}">
<link rel="stylesheet" href="{up}css/style.css?v={VER}">
</head>
<body>
<header class="top"><div class="wrap top__in"><a class="logo" href="{up}index.html{"?lang=en" if lang == "en" else ""}"><span class="logo__txt">Analizy<b>Rynku</b></span></a>
<nav class="nav"></nav><a class="btn btn--primary top__cta" href="{app}">{L("Wykres na żywo", "Live chart")}</a></div></header>
<main>
<div class="phead"><div class="wrap phead__in">
<p class="eyebrow">{e(pole(ins, "nazwa", lang))} · {e(ins.get("symbol"))}</p>
<h1>{e(tytul)}</h1>
<div class="meta"><span class="bias bias--{e(a["kierunek"])}">{e(kier)}</span><span class="sep"></span><span>{L("Interwał", "Timeframe")} <b class="num">{e(a["interwal"])}</b></span><span class="sep"></span><span>{L("Opublikowano", "Published")} {data(a["data"], lang)}</span><span class="sep"></span><span>{L("Wynik", "Result")}: {e(wynik)}</span></div>
</div></div>
<div class="wrap page"><div class="split"><div class="article">
<div class="summary"><h4 class="eyebrow">{L("Podsumowanie", "Summary")}</h4><p>{e(lead)}</p></div>
{tresc}
{f'<div class="sec-head"><div><h2>{L("Scenariusze", "Scenarios")}</h2></div></div><ul class="scen">{scen}</ul>' if scen else ''}
{f'<div class="sec-head"><div><h2>{L("Źródła", "Sources")}</h2></div></div><ol class="sources">' + ''.join(f'<li><a href="{e(z["url"])}" rel="noopener">{e(z["nazwa"])}</a></li>' for z in a.get("zrodla", [])) + '</ol>' if a.get("zrodla") else ''}
{f'<p class="muted" style="font-size:13px">{L("Analizę przygotowała AI (Claude) na podstawie podanych źródeł.", "This analysis was prepared by AI (Claude) from the sources listed.")}</p>' if a.get("ai") else ''}
<p><a class="btn btn--primary" href="{app}">{L("Zobacz wykres na żywo i pełną analizę", "See the live chart and full analysis")}</a></p>
</div>
<aside class="aside"><div class="panel"><h4>{L("Kluczowe poziomy", "Key levels")}</h4><table class="lvl"><tbody>{poz}</tbody></table></div>
<div class="panel"><h4>{L("Ostrzeżenie", "Disclaimer")}</h4><p class="muted" style="margin:0;font-size:13px">{L("Analiza ma charakter edukacyjny i nie stanowi rekomendacji inwestycyjnej.", "This analysis is educational and is not investment advice.")} <a href="{up}index.html{q}#ryzyko">{L("Pełne zastrzeżenie", "Full disclaimer")}</a></p></div></aside>
</div></div>
</main>
<footer class="foot"><div class="wrap foot__risk"><p>© AnalizyRynku · <a href="{up}index.html{q}#regulamin">{L("Regulamin", "Terms")}</a> · <a href="{up}index.html{q}#prywatnosc">{L("Polityka prywatności", "Privacy")}</a></p></div></footer>
</body>
</html>
'''

# Zabezpieczenie: katalog wyjściowy nie może być katalogiem strony ani jego nadrzędnym, a istniejący
# katalog usuwamy tylko wtedy, gdy wcześniej utworzył go ten skrypt (plik-znacznik).
OUT = os.path.realpath(OUT)
ZNACZNIK = '.wygenerowane-przez-publikuj'
if OUT == ROOT or ROOT.startswith(OUT + os.sep) or OUT.startswith(ROOT + os.sep):
    sys.exit(f'Błąd: katalog wyjściowy {OUT} nie może leżeć w katalogu strony ani go zawierać.')
if os.path.exists(OUT):
    if os.listdir(OUT) and not os.path.exists(os.path.join(OUT, ZNACZNIK)):
        sys.exit(f'Błąd: {OUT} nie jest pusty i nie został utworzony przez ten skrypt. Wybierz inny katalog.')
    shutil.rmtree(OUT)
os.makedirs(OUT)
open(os.path.join(OUT, ZNACZNIK), 'w').close()
shutil.copy(os.path.join(ROOT, 'index.html'), OUT)
for d in ('css', 'js'):
    shutil.copytree(os.path.join(ROOT, d), os.path.join(OUT, d))

# Strona główna: adres kanoniczny i podgląd w mediach społecznościowych.
idx = open(os.path.join(OUT, 'index.html'), encoding='utf-8').read()
idx = idx.replace('<link rel="alternate" hreflang="pl" href="./?lang=pl">', f'<link rel="alternate" hreflang="pl" href="{DOM}/">')
idx = idx.replace('<link rel="alternate" hreflang="en" href="./?lang=en">', f'<link rel="alternate" hreflang="en" href="{DOM}/?lang=en">\n<link rel="alternate" hreflang="x-default" href="{DOM}/">')
og = (f'<meta property="og:type" content="website">\n<meta property="og:site_name" content="AnalizyRynku">\n'
      '<meta property="og:title" content="AnalizyRynku: analizy rynków z rozliczaną skutecznością">\n'
      '<meta property="og:description" content="Forex, USD/PLN, złoto, srebro, ropa, Nasdaq 100, S&amp;P 500, DAX i bitcoin: poziomy, scenariusze, kalendarz ekonomiczny.">\n'
      f'<meta property="og:url" content="{DOM}/">\n')
idx = idx.replace('<link rel="preconnect"', og + '<link rel="preconnect"', 1)
# Wersja plików w adresach (?v=...), żeby przeglądarka po aktualizacji nie używała starych CSS i JS z pamięci.
import re as _re, time as _time
VER = _time.strftime('%Y%m%d%H%M')
idx = idx.replace('href="css/style.css"', f'href="css/style.css?v={VER}"')
idx = _re.sub(r'src="js/([\w-]+)\.js"', lambda m: f'src="js/{m.group(1)}.js?v={VER}"', idx)
open(os.path.join(OUT, 'index.html'), 'w', encoding='utf-8').write(idx)

urls = [f'{DOM}/']
for a in AN:
    for lang in ('pl', 'en'):
        if lang == 'en' and not a.get('tytul_en'):
            continue
        d = os.path.join(OUT, 'en', 'analysis', a['id']) if lang == 'en' else os.path.join(OUT, 'analiza', a['id'])
        os.makedirs(d, exist_ok=True)
        open(os.path.join(d, 'index.html'), 'w', encoding='utf-8').write(strona(a, lang))
        urls.append(adres(a, lang))

open(os.path.join(OUT, 'sitemap.xml'), 'w', encoding='utf-8').write(
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    ''.join(f'  <url><loc>{e(u)}</loc></url>\n' for u in urls) + '</urlset>\n')
open(os.path.join(OUT, 'robots.txt'), 'w', encoding='utf-8').write(f'User-agent: *\nAllow: /\nSitemap: {DOM}/sitemap.xml\n')
if TEST:
    open(os.path.join(OUT, 'robots.txt'), 'w', encoding='utf-8').write('User-agent: *\nDisallow: /\n')
    os.remove(os.path.join(OUT, 'sitemap.xml'))
    for kat, _, pliki in os.walk(OUT):
        for f in pliki:
            if f.endswith('.html'):
                pth = os.path.join(kat, f)
                t = open(pth, encoding='utf-8').read()
                t = t.replace('<head>', '<head>\n<meta name="robots" content="noindex, nofollow">', 1)
                open(pth, 'w', encoding='utf-8').write(t)
    print('Wersja próbna: strona ukryta przed wyszukiwarkami (noindex, robots.txt Disallow).')
print(f'Gotowe: {OUT} ({len(urls)} adresów w sitemap.xml)')
open(os.path.join(OUT, 'JAK-OTWORZYC.txt'), 'w', encoding='utf-8').write(
    'Jak obejrzeć stronę na swoim komputerze\n\n'
    '1. Rozpakuj plik ZIP (prawy przycisk > Wyodrębnij wszystkie).\n'
    '2. Otwórz plik index.html (dwuklik). Strona otworzy się w przeglądarce.\n'
    '3. Na banerze cookies kliknij „Akceptuję”, żeby załadowały się wykresy i notowania TradingView na żywo.\n\n'
    'Osobne strony analiz są w katalogach analiza/ (po polsku) i en/analysis/ (po angielsku).\n'
    'Ten katalog nadaje się też do wrzucenia na hosting, gdy zdecydujesz się na publikację.\n')
