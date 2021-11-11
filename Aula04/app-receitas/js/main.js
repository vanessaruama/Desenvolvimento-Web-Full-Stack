function salvarIngrediente() {
    const ingredienteDigitado = document.getElementById("ingrediente").value
    
    let novo_li = document.createElement("li")
    novo_li.appendChild(document.createTextNode(ingredienteDigitado +  ' '))
    var botao_apagar = document.createElement("button")
    botao_apagar.innerHTML = "Remover ❌"
    novo_li.appendChild(botao_apagar)
    novo_li.className = "estiloIngrediente"
    document.getElementById("minhaLista").appendChild(novo_li)
    window.localStorage.setItem(ingredienteDigitado, ingredienteDigitado)
    removerIngrediente()
}

function removerIngrediente() {
   var todosIngredientes = document.querySelectorAll(".estiloIngrediente");
   for (var index = 0; index < todosIngredientes.length; index++){
       todosIngredientes[index].addEventListener("click", function(){
         this.classList.toggle("active");
      });
      todosIngredientes[index].querySelector("button").addEventListener("click",
      function(){
         this.closest(".estiloIngrediente").remove();
      });
   }
}