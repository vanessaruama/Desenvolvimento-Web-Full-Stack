onload = function() {
   console.log("Carregando...")
   if (window.localStorage.getItem("imgReceitaData") !== null) {
      console.log("Tem imagem...")
      recuperarImagem()
   } 
};

function salvarIngrediente() {
    const ingredienteDigitado = document.getElementById("ingrediente").value
    
    let novo_li = document.createElement("li")
    novo_li.appendChild(document.createTextNode(ingredienteDigitado +  ' '))
    var botao_apagar = document.createElement("button")
    botao_apagar.innerHTML = "Remover ❌"
    botao_apagar.style = "display:none"
    botao_apagar.className = "botaoApagar"
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

function habilitarEdicao() {
   if(document.getElementById("botaoEditar").value == "Editar") {
      document.getElementById("botaoEditar").value = "Parar Edição"
      var todosBotoesEdicao = document.querySelectorAll(".botaoApagar");
      for (var index = 0; index < todosBotoesEdicao.length; index++){
         todosBotoesEdicao[index].style = ""
      }
   }
   else {
      document.getElementById("botaoEditar").value = "Editar"
      var todosBotoesEdicao = document.querySelectorAll(".botaoApagar");
      for (var index = 0; index < todosBotoesEdicao.length; index++){
         todosBotoesEdicao[index].style = "display:none"
      }
   }
}

function salvarImagem() {
   var imagemDaReceita = document.getElementById('imagemReceitaID');
   var file    = document.querySelector('input[type=file]').files[0];
   var reader  = new FileReader();
 
   reader.onload = function () {
      imagemDaReceita.src = reader.result
      console.log("hora de salvar" + reader.result)
      localStorage.setItem("imgReceitaData", reader.result)
   }
 
   if (file) {
     reader.readAsDataURL(file);
   } 
}

function recuperarImagem() {
   var dataImage = localStorage.getItem('imgReceitaData');
   bannerImg = document.getElementById('imagemReceitaID');
   bannerImg.src = dataImage;
}