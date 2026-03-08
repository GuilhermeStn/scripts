// USER LOGIN 

let user00 = prompt("define á senha do user00 ")

let user01 = prompt("define á senha do user01 ")


console.log(user00)
console.log(user01)

let lista = [user00,user01]

console.log(lista)

var pergunta = prompt("qual user deseja acessar [0]user00 , [1]user01 ")

if (pergunta==0){
    console.log("Escolheu o user00 ")
    var senha = prompt("Digite a senha do user00 ")
    if (senha==user00){
        console.log("SENHA CERTAA")
        console.log(senha)
        console.log(user00)
    }if(senha!=user00){
            console.log("nãoo")
            console.log("senha errada")
            var vezes = 0
            while (vezes<3) {
                senha = prompt("Digite novamente a senha do user00: ")
                vezes = vezes + 1 
                if (senha==user00){
                    console.log("Senha certa !")
                    break
                }
            }console.log("Tentativas esgotadas")
            var email = prompt("Digite seu email para recuperar a senha: ")
            console.log("Enviando COD de recuperação para o email: "+email)
        }{
        
    }
}if (pergunta==1){
     console.log("Escolheu o user01 ")
     var senha = prompt("Digite a senha do user01: ")
     if(senha==user01){
        console.log("SENHA CERTAA")
        console.log(senha)
        console.log(user01)
     }if(senha!=user01){
            console.log("nãoo")
            console.log("senha errada")
            var vezes = 0
            while (vezes<3) {
                senha = prompt("Digite novamente a senha do user01: ")
                vezes = vezes + 1 
                if (senha==user01){
                    console.log("Senha certa !")
                    break
                }
            }console.log("Tentativas esgotadas")
            var email = prompt("Digite seu email para recuperar a senha: ")
            console.log("Enviando COD de recuperação para o email: "+email)
        }{
        
    }
}

