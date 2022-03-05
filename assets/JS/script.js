const listaOpcoes = document.querySelector(".secaoDetalhesConta_opcoesTransacoes");

listaOpcoes.addEventListener("click", identificarOpcoes);

//executando ação após clique
function identificarOpcoes(event) {
    //identificando onde ocorreu o clique
    const elemento = event.target //addEventListener passa o "event" por default; target identifica exatamente o elemento
    //verificando se é um LI
    if(elemento.tagName == "LI") {
        //recuperando o ID
        const id = elemento.id
        //selecionando uma seção através do ID (escolha do usuário)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)
        
        //removendo classe mostrar
        removeClasseMostrar()

        //listar e adicionar uma classe
        secaoEscolha.classList.add("mostrar")
        
    }
}

function removeClasseMostrar() {
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++) {

        divs[i].classList.remove("mostrar")    
    }

}

