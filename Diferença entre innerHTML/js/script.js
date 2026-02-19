// diferença entre innerHTML 

// consegue alterar o conteúdo ADDC html e texto 

var container = document.querySelector("#container");

// selecinou o elemento container 

container.innerHTML = "<h1> TESTANDO O INNER HTML </h1>";
// atribuir o elemento h1 com o valor : 

// INNERTEXT == APENAS TEXTO 


var container_b = document.querySelector("#container_b");

container_b.innerText = "<h2>testando o innertext </h2>"