import requests 
import webbrowser
import time
### import requests requisições http 

url = "https://wttr.in/Sãopaulo"
normal = url 

### api que ja vem com a base de dados que sera mostrada
 
# requests.get



open = requests.get(url)

resultado = open.text 

code = open.status_code

print(code)
print(open) # irá mostrar a resposta do server 


if code == 200:
    print(f"Conexão com o site {url} , aceita ! ")
    print(resultado)
    time.sleep(2)
    abrir = normal
    webbrowser.open(abrir)

