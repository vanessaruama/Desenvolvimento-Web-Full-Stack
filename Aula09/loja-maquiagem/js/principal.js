

window.onload = function() {
    console.log('terminou de carregar')
    obterProdutos('blush')
}
//document.getElementById('idprodutos').addEventListener('scroll', () => {
//    console.log('scrollou quando vc scrola na secao produtos')
// })};

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

    var img = document.createElement('img')
    img.src = produto.api_featured_image

    var p1 = document.createElement('p');
    p1.innerHTML = produto.name
    var p2 = document.createElement('p');
    p2.innerHTML = produto.brand
    var p3 = document.createElement('p');
    p3.innerHTML = produto.category
    var p4 = document.createElement('p');
    p4.innerHTML = produto.price
    var p5 = document.createElement('p');

    var cores = produto.product_colors

    if (cores.length > 0) {
       console.log(cores)
       cores.forEach(function (cor, indice, cores) {
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
       })
    } else{
       p5.innerText = 'cor única' 
    }
    var hr = document.createElement('hr')

    var itemText = document.createElement('div');
    itemText.classList.add("itemText");

    item.appendChild(img)
    item.appendChild(hr)
    itemText.appendChild(p1)
    itemText.appendChild(p2)
    itemText.appendChild(p3)
    itemText.appendChild(p4)
    itemText.appendChild(p5)

    item.appendChild(itemText)

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