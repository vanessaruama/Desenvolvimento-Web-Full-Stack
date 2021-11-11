contador = 0;

window.onload = function() {
  // Terminou de carregar
  // Adiciona o calculo na primeira linha
  adicionarLinha()
};

function adicionarLinha() {
    
    contador++; // contador = contador + 1
    
    var tabela = document.getElementById('tabelaAluno');
    
    var numeroLinhas = tabela.rows.length;
  
    var linha = tabela.insertRow(numeroLinhas);

    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);   
    var celula3 = linha.insertCell(2); 
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    var celula6 = linha.insertCell(5);
    var celula7 = linha.insertCell(6);
    var celula8 = linha.insertCell(7);
    
    celula1.innerHTML =   contador
    celula2.innerHTML =  "<input type='text' class='form-control' tipo='disciplina'>"
    celula3.innerHTML =  "<input type='text' class='form-control' tipo='nome_professor'>"
    celula4.innerHTML =  "<input type='number' class='form-control'>"
    celula5.innerHTML =  "<input type='number' class='form-control'>"
    celula6.innerHTML =  "<input type='number' class='form-control' disabled>"
    celula7.innerHTML =  "<button type='button' class='btn btn-dark' onclick='adicionarLinha()'>Adicionar</button>"
    celula8.innerHTML =  "<button class='btn btn-danger' onclick='removeLinha(this)'>Remover <i class='bi bi-trash-fill'></i> </button>";

    let acElement = celula4.getElementsByTagName('input')[0]
    let provaElement = celula5.getElementsByTagName('input')[0]
    let mediaElement = celula6.getElementsByTagName('input')[0]

    escutaAlteracoes(acElement, provaElement, mediaElement, linha)
  }
  
function removeLinha(linha) {

  if (window.confirm("Você quer realmente apagar?")) {

  var i=linha.parentNode.parentNode.rowIndex - 1;
  var tabela = document.getElementById('tabelaAluno');
  tabela.deleteRow(i);

  // Previne que a ultima linha seja removida e contabilizada novamente
  if ((i < tabela.rows.length) == false) {
    contador = contador - 1 // contador--
  }
  // Reinicia o contador
  if (tabela.rows.length == 1) {
      contador = 1
  }
}
} 

  
function gerarRelatorio() {
  
    //window.jsPDF = window.jspdf.jsPDF;
    var doc = new jspdf.jsPDF();//new jsPDF();
    doc.setFontSize(20);
    let pageWidth = doc.internal.pageSize.getWidth();
    let metade = pageWidth / 2;
    doc.text("Boletim do Aluno", metade , 30, 'center');
    doc.addImage("data:image/png;base64,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", "JPEG", 0, 0, 20, 20);
    doc.text("Nome do Aluno", metade , 50, 'center');
    doc.setDrawColor(150, 150, 150)
    doc.line(10, 60, pageWidth - 10, 60, 'F')

    var espacoVertical = 15
    var espacoHorizontal = 50
    let entradas = document.getElementsByTagName('input')
    

    for (i = 0; i < entradas.length; i++){

      if (entradas[i].tipo == 'disciplina') {
        entrada.x = sdsdfsdf
      }

      let isInputProvaOrAC = (entradas[i].type == "number") && (entradas[i].disabled == false)
      
      // não entra prova nem AC
      if (isInputProvaOrAC == false) {

        // verifica se é o primeiro para pular linha
        if(i == 0 || i % 5 == 0) {
          espacoVertical = espacoVertical + 15
          espacoHorizontal = 50
        } else {
          espacoHorizontal = espacoHorizontal + 50
        }
        // verifica se é a media
        if (entradas[i].disabled == true) {
          if (entradas[i].value > 5.9) {
            doc.setTextColor(0, 255, 0)
            doc.text(entradas[i].value, espacoHorizontal , 50 + espacoVertical, 'center');
          } else {
            doc.setTextColor(255, 0, 0)
            doc.text(entradas[i].value, espacoHorizontal , 50 + espacoVertical, 'center');
          }
        }
        // caso não for a media, já sei que não é AC nem Prova, então é Nome ou Disciplina 
        else {
          doc.setTextColor(150, 150, 150)
          doc.text(entradas[i].value, espacoHorizontal , 50 + espacoVertical, 'center');
        }
      } 
    }

    doc.save('nome_aluno_boletim' + '.pdf');

}

  /*
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log('carregou a página')
    var prova = document.getElementById('inputProva')
    var atividade = document.getElementById('inputAC')

    prova.addEventListener("onchange", function(event) {
      calculaMedia(prova.text, atividade.text)
    })

    atividade.addEventListener("onchange", function(event) {
      calculaMedia(prova.text, atividade.text)
    })

 });
 */

 function escutaAlteracoes(provaInput, atividadeInput, mediaInput, linha) {

    provaInput.addEventListener("change", function(event) { 
      normalizarNota(atividadeInput)
      normalizarNota(provaInput)
      var mediaFinal = calculaMedia(provaInput, atividadeInput)
      escreveMedia(mediaFinal, mediaInput)
      colorirBaseadoNaMedia(mediaFinal, linha)
    })

    atividadeInput.addEventListener("change", function(event) {
      normalizarNota(atividadeInput)
      normalizarNota(provaInput) 
      var mediaFinal = calculaMedia(provaInput, atividadeInput)
      escreveMedia(mediaFinal, mediaInput)
      colorirBaseadoNaMedia(mediaFinal, linha)
  })

    // atividadeInput.addEventListener("onchange", calculaMedia(provaInput, atividadeInput))

 }

 function calculaMedia(provaInput, atividadeInput) {
  var media = 0.7 * Number(provaInput.value) + 0.3 * Number(atividadeInput.value)
  return media
}

function escreveMedia(media, mediaInput) {
  mediaInput.value = media.toPrecision(2)
}

function colorirBaseadoNaMedia(media, linha) {
  if (media > 5.9) {
    linha.classList.remove('table-danger')
    linha.classList.add('table-success')
  } else {
    linha.classList.remove('table-success')
    linha.classList.add('table-danger')
  }
}

 function normalizarNota(input) {
   input.value = input.value > 10 ? 10 : input.value
   input.value = input.value < 0 ? 0 : input.value
   /*
   if (input.value > 10) {
     input.value = 10
   } else if (input.value < 0) {
     input.value = 0
   }
   */
 }