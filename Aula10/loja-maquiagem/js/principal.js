document.addEventListener("DOMContentLoaded", function(event) {
   console.log("DOM completamente carregado e analisado");
   obterProdutos('blush')
});

 function listarProdutos(produtos) {
    // percorrer um array https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
    produtos.forEach(function (produto, indice, array) {
        //listarCores(produto)
        desenharCardProduto(produto)
    });
 }


 function desenharCardProduto(produto) {
    var secaoItems = document.getElementById('idprodutos')
    var item = document.createElement('div');
    item.classList.add("item");
    item.innerHTML = document.getElementById('templateItem').innerHTML
    item.innerHTML = item.innerHTML
          .replace(/{IMAGE}/g, produto.api_featured_image)
          .replace(/{NOME}/g, produto.name)
          .replace(/{BRAND}/g, produto.brand)
          .replace(/{CATEGORY}/g, produto.category)
          .replace(/{PRICE}/g, produto.price)


    // Início das bolinhas
    var cores = produto.product_colors

    if (cores.length > 0) {
       console.log(cores)
       cores.forEach(function (cor, indice, cores) {
          /*
            var span1 = document.createElement('span')
            span1.innerText = '\xa0'
            span1.classList.add('badge')
            span1.classList.add('rounded-pill')
            //span1.classList.add('corzinha')
            span1.style.backgroundColor = cor.hex_value
            p5.appendChild(span1)
            var space = document.createElement('span')
            space.innerText = '\xa0'
            p5.appendChild(space)
            */
       })
    } else{
       //p5.innerText = 'cor única' 
    }
    // Fim das bolinhas

    secaoItems.appendChild(item);
 }

 async function obterProdutos(tipo) {
     console.log('Iniciando o download...')
     var url = `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${tipo}`
     
     var resultado = await fetch(url)

     resultado.json() 
     .then(produtos => {
        document.getElementById('idprodutos').replaceChildren();
        listarProdutos(produtos)
      });     
 }