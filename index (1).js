// CALCULADOR DE MEGIC NUMBER 

function magi(nome,valor,rendimento,quantidade){
  console.log(nome)
  console.log(valor)
  console.log(rendimento)
  var teste = quantidade * valor 
  console.log("total investido de :" +teste)
  var cal = rendimento * 10 
  var investido = valor * 10
  var rendi = rendimento * quantidade 
  console.log("valor invesitido no fundo: "+nome )
  console.log("valor invesido em 10 cotas: "+investido)
  console.log("rendimento mensal de: "+rendi)
  while (rendi< valor){
    console.log("Ativo rendendo do valor de compra")
    quantidade = quantidade + 1 
    var oi = quantidade * rendimento
    var contage = investido + 1 
    var cota = total/ valor 
    console.log("rendimento em "+ cota * rendimento)
    var total = parseInt(contage+quantidade*teste) 
    console.log("valor investido de : R$ "+total)
    console.log("Quantidade de cotas:  "+cota)
    if (oi>=1){
      console.log("rendimento maior ou igual á R$1,00")
      break
    }
  }
}

magi("gare11",8.50,0.09,3)