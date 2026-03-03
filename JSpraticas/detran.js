// DETRAN EM JS 

function detran(idade){
    console.log(idade);
    if (idade>=18){
        console.log("Você é maior de idade");
        var site = "https://www.detran.sp.gov.br/detransp"
    }else{
        console.log("Você ainda é de menor");
        const minimo = 18;
        var falta = minimo - idade;
        console.log("lhe falta : "+falta)
    }
}


detran(20)
