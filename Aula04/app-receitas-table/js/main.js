function salvarIngrediente() {
    console.log("Salvando ingrediente")
    const ingredienteDigitado = document.getElementById("ingrediente").value
    
    let novo_li = document.createElement("li")
    novo_li.appendChild(document.createTextNode(ingredienteDigitado));
    document.getElementById("minhaLista").appendChild(novo_li)
    window.localStorage.setItem(ingredienteDigitado, ingredienteDigitado)
}