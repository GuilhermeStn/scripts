programa {
  funcao inicio() {
    //escreva("BILHEITERIA")
    
    
    //escreva(" MAXIMO DE ENGREÇOS 15")

    // criar variavéis ( valores inteiros )

    // cadeia indica texto = como se fosse str in python

    cadeia nome_pessoa    // declaração do nome da pessoa = dado escrito 
    inteiro bilheite    // declaração de quantidade de bilheites 
    inteiro desconto    // declarando o desconto que o consumidor terá 

    escreva("Qual é o seu nome: ")  //interação com o user 
    escreva("\n")
    escreva("Quantos Bilheites deseja?\n ")
    //escreva("Quantos bilheites você quer: ") 

    leia() // permite que o user digite alguma coisa e guardar na variavel 

    leia(nome_pessoa)

    escreva("Boa noite  ",  nome_pessoa) 
    escreva("\n")
    leia(bilheite)
    escreva("total de: ", bilheite)
    escreva("\n")
    se(bilheite > 15)
      escreva(" RECUSADO ")
      escreva("\n")
    desconto =  bilheite * 30 
    escreva("Boa escolha: ")
    escreva("\n")
    escreva("total sem desconto: ", desconto)
    escreva("\n")  // valor sem desconto 
    escreva("Desconto de: " , desconto * 5 / 100 )
    escreva("\n")   // desconto 
    escreva("Você pagará: ", desconto * 5 / 100 - desconto)
    escreva("\n")  // desconto - o valor 

          
  }
}
