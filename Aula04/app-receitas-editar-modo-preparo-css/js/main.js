onload = function() {
   inicializarBancoDeDados()
   console.log("Carregando...")
   recuperarPreparo()
   recuperarImagem()
};

function inicializarBancoDeDados() {
         // Forcing localstorage here. Feel free to switch to other drivers :)
         localforage.setDriver(localforage.LOCALSTORAGE).then(function() {
            var key = 'STORE_KEY';
            // var value = 'What we save offline';
            var value = new Uint8Array(8);
            value[0] = 65
            // var value = undefined;
            var UNKNOWN_KEY = 'unknown_key';
    
            localforage.setItem(key, value, function() {
              console.log('Saved: ' + value);
    
              localforage.getItem(key, function(err, readValue) {
                console.log('Read: ', readValue);
              });
    
              // Since this key hasn't been set yet, we'll get a null value
              localforage.getItem(UNKNOWN_KEY, function(err, readValue) {
                console.log('Result of reading ' + UNKNOWN_KEY, readValue);
              });
            });
          });
}

function salvarIngrediente() {
    const ingredienteDigitado = document.getElementById("ingrediente").value
    
    let novo_li = document.createElement("li")
    let nova_div = document.createElement('div')
    nova_div.className = "list-item__center"
    nova_div.appendChild(document.createTextNode(ingredienteDigitado +  ' '))
    novo_li.appendChild(nova_div)
    var botao_apagar = document.createElement("button")
    botao_apagar.innerHTML = "❌"
    botao_apagar.style = "display:none"
    botao_apagar.className = "botaoApagar"
    novo_li.appendChild(botao_apagar)
    novo_li.className = "estiloIngrediente list-item list-item--tappable"
    document.getElementById("minhaLista").appendChild(novo_li)
    localforage.setItem(ingredienteDigitado, ingredienteDigitado)
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
      localforage.setItem("imgReceitaData", reader.result)
   }
 
   if (file) {
     reader.readAsDataURL(file);
   } 
}

function recuperarImagem() {
   localforage.getItem("imgReceitaData", function (err, value) { 
      if(err == null && value !== null) {
         bannerImg = document.getElementById('imagemReceitaID');
         bannerImg.src = value;
      }
   });
}

function salvarPreparo() {
   var preparo = document.getElementById("modoDePreparo");
   console.log(preparo.value)
   localforage.setItem("modoDePreparoKey", preparo.value, function (err) {
      console.log(err)
   });
}

function recuperarPreparo() {
   var preparo = document.getElementById("modoDePreparo");
   localforage.getItem('modoDePreparoKey', function (err, value) {
      console.log(err)
      console.log(value)
      if(err == null) {
         preparo.value = value
      }
   });
}