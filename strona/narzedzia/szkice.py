# Rozliczenia i nowe szkice analiz: python3 szkice.py config.json
# config: {"data": "RRRR-MM-DD", "settle": [[id, status, data, kom, kom_en], ...],
#          "drafts": [{id, instrument, kierunek, tytul, tytul_en, lead, lead_en, cena, opory, wsparcia,
#                      sc: [[typ, tekst, tekst_en]], tresc: [...], tresc_en: [...], zrodla: [[nazwa, url]]}]}
import json, sys
c = json.load(open(sys.argv[1], encoding='utf-8'))
P = '/mnt/project-files/strona/js/analizy.js'
s = open(P, encoding='utf-8').read()
js = lambda v: json.dumps(v, ensure_ascii=False)
for aid, status, data, kom, kom_en in c.get('settle', []):
    i = s.index('id: "%s"' % aid); j = s.index('    poziomy:', i); k = s.index('\n', j)
    assert 'wynik:' not in s[i:s.index('\n  },', i)], aid
    s = s[:k+1] + '    wynik: { status: %s, data: %s, komentarz: %s, komentarz_en: %s },\n' % (js(status), js(data), js(kom), js(kom_en)) + s[k+1:]
out = ''
for d in c.get('drafts', []):
    assert 'id: "%s"' % d['id'] not in s, d['id']
    out += '''  {
    id: %s, instrument: %s, data: %s, interwal: "D1",
    kierunek: %s, ai: true, szkic: true,
    tytul: %s, tytul_en: %s,
    lead: %s,
    lead_en: %s,
    poziomy: { cena: %s, opory: %s, wsparcia: %s },
    scenariusze: [
%s
    ],
    tresc: [
%s
    ],
    tresc_en: [
%s
    ],
    zrodla: [
%s
    ]
  },
''' % (js(d['id']), js(d['instrument']), js(c['data']), js(d['kierunek']), js(d['tytul']), js(d['tytul_en']), js(d['lead']), js(d['lead_en']),
       d['cena'], js(d['opory']), js(d['wsparcia']),
       ",\n".join('      { typ: %s, tekst: %s, tekst_en: %s }' % (js(a), js(b), js(x)) for a, b, x in d['sc']),
       ",\n".join("      " + js(x) for x in d['tresc']), ",\n".join("      " + js(x) for x in d['tresc_en']),
       ",\n".join('      { nazwa: %s, url: %s }' % (js(n), js(u)) for n, u in d['zrodla']))
s = s.replace('window.ANALIZY = [\n', 'window.ANALIZY = [\n' + out, 1)
open(P, 'w', encoding='utf-8').write(s)
print('ok', len(c.get('settle', [])), 'rozliczeń,', len(c.get('drafts', [])), 'szkiców')
