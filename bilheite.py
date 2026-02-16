print("BILHEITERIA")  ### MENSAGEM DE BOAS VINDAS 


#### QUANTOS BILHEITES 

### PREÇO DE CADA BILHEITE

print("MAXIMO DE ENGREÇOS 15 ")  # MAXIMA QUANTINDADE DE ENGRESSOS PARA COMPRA 

bi = int(input("Quantos Bilheites você gostaria?  CADA: R$30,00 "))  # INTERAÇÃO COM O USER
while bi > 15:  # ENQUANTO O USUARIO COLOCAR A QNT DE BILHEITES MAIOR DOQUE  15 
    print("Erro")   # ERRO 
    bi = int(input("Quantos Bilheites você gostaria?  CADA: R$30,00 "))  # INTERAÇÃO COM O USER NOVAMENTE 
############### QUANDO O MESMO ESCOLHER O VALOR MENOR DOQUE 15  

if bi >= 1 :   # CONDIÇÃO , CASO O VALOR COMPRADO SEJA +1 
  print("A CADA BILHEITE COMPRADO, VOCÊ RECEBERÁ 5% DE DESCONTO ") 
  valor = bi * 30  ## VALOR SEM DESCONTOS 
  print(f" O valor dos ingressos sem descontos séria {valor}")
  des = valor * (5*bi) / 100 
  print( valor- des) ## valor a ser pago 
  final = valor - des 
  print(final - valor)  ## valor do desconto do mesmo 


