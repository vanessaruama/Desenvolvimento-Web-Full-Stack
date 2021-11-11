function mostraEscondeFigurinhas() {
    var todesFigures = document.getElementsByClassName("figuraSizer")
    var botao = document.getElementsByClassName("botaoDaAlegria")
    var header = document.getElementsByClassName("cabecalho")
    
    for(i =0; i < todesFigures.length; i++) {
        if (todesFigures[i].style.display == "none") {
            todesFigures[i].style.display = "grid"
        } else {
            todesFigures[i].style.display = "none"
        }
    }

    if (botao[0].value == "Esconder") {
        botao[0].value = "Mostrar"
        botao[0].className = "btn btn-secondary btn-lg botaoDaAlegria"
        //header[0].classList.remove('cabecalho')
    } else {
        botao[0].value = "Esconder"
        botao[0].className = "btn btn-primary btn-lg botaoDaAlegria"
        //não funciona se remover anteriormente
        //header[0].className = "cabecalho"
        //header[0].classList.add("cabecalho")
    }
}

function basicoJS() {

    var a = 1
    var b = 2
    var soma = a + b
    var subtracao = a - b
    var divisao = a / b
    var multiplicacao = a * b

    //Math https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math
    //Number https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number

}

function basicoDatas() {
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
    var today = new Date();
    var birthday1 = new Date("December 17, 1995 03:24:00");
    var birthday2 = new Date("1995-12-17T03:24:00");
    var birthday3 = new Date(1995,11,17);
    var racionais = new Date(1992,10,1,8,0,0);
}

function deleteFigure(figureClass) {
    var todasFiguras = document.getElementsByClassName('figurinhas') // retorna um array
    var figureParaSerDeletada = document.getElementsByClassName(figureClass) // retorna um array, mesmo que seja com 1 elemento (ou nenhum)
    todasFiguras[0].removeChild(figureParaSerDeletada[0])
}
