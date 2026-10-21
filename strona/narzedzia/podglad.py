# Składa stronę w jeden plik HTML do podglądu w Claude: python3 narzedzia/podglad.py <plik_wyjściowy.html>
import re,sys
root='/mnt/project-files/strona/'
h=open(root+'index.html').read()
body=h.split('<!--BODY-->')[1].split('<!--/BODY-->')[0]
import os
for f in ['ustawienia','i18n','instrumenty','analizy','przeglad','kalendarz','vendor/lightweight-charts','ohlc','app','asystent']:
    src=open(root+f'js/{f}.js').read() if os.path.exists(root+f'js/{f}.js') else ''
    body=body.replace(f'<script src="js/{f}.js"></script>','<script>\n'+src+'\n</script>')
fonts=re.search(r'<link rel="stylesheet" href="(https://fonts[^"]+)">',h).group(1)
out=('<title>Analizy Rynku</title>\n<meta name="claude:viewport-fit-sides" content="cover">\n'
 f'<link rel="stylesheet" href="{fonts}">\n<style>\n'+open(root+'css/style.css').read()+'\n</style>\n'+body)
open(sys.argv[1],'w').write(out)
