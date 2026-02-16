### jogo 
import random

print(random.random())  

machine = random.randrange(0,9)


print(machine)

jogador = int(input("Tente advinhar um número entre 0 e  9 : "))

if jogador == machine :
    print(f"Parabêns, o número escolhido pela maquina foi {machine} , e o seu número foi {jogador}")
else:
    print("tentará novamente")
    while jogador != machine :
        jogador = int(input("Tente advinhar novamente entre 0 e  9 : "))
        if jogador == machine:
            print("acetoou")
        




