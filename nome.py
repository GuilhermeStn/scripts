print("cantina")

produto = str(input("Digite o nome do produto: "))

valor = float(input(f"Digite o valor do {produto} "))

dinheiro = float(input("Page: "))


if dinheiro == valor :
    print(f"valor do pruduto {valor} , dinhiero {dinheiro}") 
    print("não tera troco")
else:
    print("terá troco")
    calculo = valor - dinheiro 
    print(f"seu troco é de {calculo}")





