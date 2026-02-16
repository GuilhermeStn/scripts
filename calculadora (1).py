print("Hello, World!")


print(" Calculadora de ativos financeiros")


ativo = str(input("Digite o nome do ativo: "))

preco_compra = float(input("Digite o preço de compra do ativo: "))

rendimento = float(input("Digite o rendimento do ativo por mês: "))

print(ativo)

print(preco_compra)

print(rendimento)

cal = rendimento *10 
valor_investido = preco_compra *10

print("O valor investido em 10 unidades do ativo é R$", valor_investido)

print("O rendimento mensal de 10 unidades por mês do ativo é R$ ", cal)

while cal < 1: 
    print("Ativo rendendo menos de 1 por mês ")
    cal = cal + 1 
    print(cal)
    print(" Aproximadamente Valor investido para chegar a R$1.00 por mês é R$ ", valor_investido + cal ) 
    break

if cal >=1:
    print("Ativo rendendo R$1.00 por mês")
    cal = cal * 2
    print("O valor investido em 20 unidades do ativo é R$", valor_investido * 2 )
    if cal < preco_compra:
       while cal < preco_compra:
           cal = cal * 1.5
           print("Aproximadamente o valor  investido : R$ ", valor_investido * cal)

           print("Aproximadamente cotas  : ", cal / rendimento)

           print("Aproximadamente Rendimento atual : R$ ", cal)
            



