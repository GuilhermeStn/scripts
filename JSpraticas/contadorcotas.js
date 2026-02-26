function juros(nome,valor,rendimento,quantidade){
    console.log("calculadora de juros compostos")
    console.log(nome);
    console.log(valor);
    console.log(rendimento);
    console.log(quantidade);
    if (quantidade==0){
        quantidade = 1 
        console.log("Addc uma cota pra simular o rendimento")
    }
    console.log("faremos a conta de quantas contas você precisa , para que o rendimento compre outra cota")
    console.log("                                  ")
    /// calcular o rendimento de acordo com a quantidade de cotas do mesmo
    var rendimento_valor = rendimento * quantidade 
    console.log("rendimento atual de R$: " + rendimento_valor)
    if (rendimento_valor < valor){
         console.log("rendimento atual de R$: " + rendimento_valor, "metro doque o valor da cota de :R$ " +valor )
         while (rendimento_valor < valor){
             quantidade = quantidade + 1  // addc uma cota a mais 
             console.log("Com a quantidade de " + quantidade ,"cotas")
             rendimento_valor = rendimento * quantidade
             console.log(" rendimento de R$ " + rendimento_valor.toFixed(2))
             var valor_investido = quantidade * valor
             console.log("valor investido nas cotas R$:" + valor_investido.toFixed(2))
         }
        }
}
juros("KNCR11", 106.24,1.20,10)

