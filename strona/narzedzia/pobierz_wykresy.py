# Pobiera dzienne świece (OHLC) dla wszystkich instrumentów i zapisuje je jako js/ohlc.js (window.OHLC).
# Uruchamia go automatycznie GitHub Actions (.github/workflows/wykresy.yml); można też ręcznie:
#   python3 narzedzia/pobierz_wykresy.py [plik_wyjściowy.js]
# Źródło: Yahoo Finance (wykres dzienny), zapasowo Stooq (CSV). Tylko biblioteka standardowa Pythona.
import csv, io, json, os, subprocess, sys, time, urllib.parse, urllib.request
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
OUT = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, 'js', 'ohlc.js')
# id instrumentu: (symbol Yahoo, symbol Stooq, miejsca po przecinku)
SYM = {
    'eurusd': ('EURUSD=X', 'eurusd', 4), 'gbpusd': ('GBPUSD=X', 'gbpusd', 4), 'usdjpy': ('JPY=X', 'usdjpy', 2),
    'usdpln': ('PLN=X', 'usdpln', 4), 'xauusd': ('GC=F', 'xauusd', 1), 'xagusd': ('SI=F', 'xagusd', 2),
    'wti': ('CL=F', 'cl.f', 2), 'nasdaq': ('^NDX', '^ndx', 0), 'sp500': ('^GSPC', '^spx', 1),
    'dax': ('^GDAXI', '^dax', 0), 'btcusd': ('BTC-USD', 'btcusd', 0),
}
UA = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36'}

def get(url):
    # Najpierw systemowy curl (Yahoo odrzuca część klientów Pythona kodem 429), potem urllib.
    try:
        r = subprocess.run(['curl', '-sS', '-f', '-L', '--compressed', '-m', '30', '-A', UA['User-Agent'],
                            '-H', 'Accept: application/json,text/csv,*/*', url], capture_output=True, text=True)
        if r.returncode == 0 and r.stdout:
            return r.stdout
        err = r.stderr.strip()
    except FileNotFoundError:
        err = 'brak curl'
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as resp:
            return resp.read().decode('utf-8')
    except Exception as e:
        raise RuntimeError(f'curl: {err}; urllib: {e}')

def coinbase():
    # Zapasowe źródło dla bitcoina: publiczne API giełdy Coinbase (świece dzienne, UTC).
    try:
        d = json.loads(get('https://api.exchange.coinbase.com/products/BTC-USD/candles?granularity=86400'))
        rows = [[datetime.fromtimestamp(x[0], timezone.utc).strftime('%Y-%m-%d'), x[3], x[2], x[1], x[4]] for x in d]
        return (sorted(rows), 'Coinbase') if rows else (None, None)
    except Exception as e:
        print(f'  coinbase: {e}')
        return None, None

def yahoo(sym):
    for host in ('query1', 'query2'):
        try:
            d = json.loads(get(f'https://{host}.finance.yahoo.com/v8/finance/chart/{urllib.parse.quote(sym)}?range=6mo&interval=1d'))
            r = d['chart']['result'][0]
            q = r['indicators']['quote'][0]
            rows = []
            for i, t in enumerate(r['timestamp']):
                o, h, l, c = q['open'][i], q['high'][i], q['low'][i], q['close'][i]
                if None in (o, h, l, c):
                    continue
                # Data sesji w strefie giełdy (gmtoffset), żeby świeca trafiła na właściwy dzień.
                day = datetime.fromtimestamp(t + r['meta'].get('gmtoffset', 0), timezone.utc).strftime('%Y-%m-%d')
                rows.append([day, o, h, l, c])
            if rows:
                return rows, 'Yahoo Finance'
        except Exception as e:
            print(f'  {host} {sym}: {e}')
    return None, None

def stooq(sym):
    try:
        txt = get(f'https://stooq.com/q/d/l/?s={urllib.parse.quote(sym)}&i=d')
        rows = [[x['Date'], float(x['Open']), float(x['High']), float(x['Low']), float(x['Close'])] for x in csv.DictReader(io.StringIO(txt))]
        return (rows[-130:], 'Stooq') if rows else (None, None)
    except Exception as e:
        print(f'  stooq {sym}: {type(e).__name__} {e}')
        return None, None

import urllib.parse
out, bledy = {}, []
for iid, (ys, ss, dec) in SYM.items():
    rows, src = yahoo(ys)
    if not rows and iid == 'btcusd':
        rows, src = coinbase()
    if not rows:
        rows, src = stooq(ss)
    if not rows:
        bledy.append(iid)
        continue
    seen = {}
    for r in rows:  # jedna świeca na dzień (ostatnia wygrywa)
        seen[r[0]] = [r[0]] + [round(v, dec + 1) for v in r[1:]]
    out[iid] = {'zrodlo': src, 'swiece': [seen[k] for k in sorted(seen)]}
    print(f'{iid}: {len(seen)} świec, ostatnia {max(seen)} ({src})')
    time.sleep(0.5)

if not out:
    sys.exit('Nie udało się pobrać żadnych danych.')
stamp = datetime.now(timezone.utc).strftime('%Y-%m-%dT%H:%MZ')
js = ('// Dzienne świece (data, otwarcie, maksimum, minimum, zamknięcie). Plik generowany automatycznie przez\n'
      '// narzedzia/pobierz_wykresy.py, nie edytuj ręcznie.\n'
      f'window.OHLC = {json.dumps({"aktualizacja": stamp, "instrumenty": out}, separators=(",", ":"))};\n')
open(OUT, 'w', encoding='utf-8').write(js)
print(f'Zapisano {OUT} ({len(js) // 1024} KB). Brak danych: {bledy or "—"}')
