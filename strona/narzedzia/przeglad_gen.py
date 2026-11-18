# Generator przeglad.js: python3 przeglad_gen.py config.json
import json,sys
c=json.load(open(sys.argv[1],encoding='utf-8'))
p='/mnt/project-files/strona/js/przeglad.js'
src=open(p,encoding='utf-8').read(); head=src[:src.index('window.PRZEGLAD')]
J=lambda v:json.dumps(v,ensure_ascii=False)
r=lambda x:round(x,2)
lines=[]
for i in ["sp500","nasdaq","xauusd","eurusd","gbpusd","usdjpy","xagusd","usdpln","wti","dax","btcusd"]:
    k=c['k'][i]; z=r((k/c['prev'][i]-1)*100); t=r((k/c['wk'][i]-1)*100)
    n,ne,zr=c['note'][i]
    lines.append(f'    {i}: {{ kurs: {k}, zmiana: {z}, tydzien: {t}, notka: {J(n)}, notka_en: {J(ne)}, zrodlo: {zr} }}'); print(i,k,z,t)
o=head+'window.PRZEGLAD = {\n'
o+=f'  aktualizacja: {J(c["aktualizacja"])},\n  stanNa_en: {J(c["stanNa_en"])},\n  stanNa: {J(c["stanNa"])},\n  naglowek_en: {J(c["naglowek_en"])},\n  naglowek: {J(c["naglowek"])},\n'
o+='  punkty: [\n'+",\n".join("    "+J(x) for x in c['P'])+'\n  ],\n  punkty_en: [\n'+",\n".join("    "+J(x) for x in c['PE'])+'\n  ],\n'
o+='  instrumenty: {\n'+",\n".join(lines)+'\n  },\n'
o+='  kalendarz: [\n'+",\n".join(f'    {{ dzien: {J(d)}, wydarzenia: {J(w)} }}' for d,w in c['kal'])+'\n  ],\n'
o+='  zrodla: [\n'+",\n".join(f'    {{ nazwa: {J(a)}, nazwa_en: {J(b)}, url: {J(u)} }}' for a,b,u in c['zr'])+'\n  ]\n};\n'
open(p,'w',encoding='utf-8').write(o)
