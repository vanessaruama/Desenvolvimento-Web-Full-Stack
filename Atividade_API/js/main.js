function PersoDados(dado) {
    return dado
  }

function TodosDados(dado){

}  

function InfoPerso(item){
    console.log(item)
    if (item == 'item1'){
        fetch('https://api.disneyapi.dev/characters/24')
        .then(disneyPromessa => disneyPromessa.json())
        .then(disneyDados => PersoDados(disneyDados))
        .then(disneyTratado => alert('O nome do personagem é: '+ disneyTratado['name'] + '\n' + 'Filmes: ' + disneyTratado['films']))
        .catch(error => alert(error))
    } else if (item == 'item2') {    
        fetch('https://api.disneyapi.dev/characters/33')
        .then(disneyPromessa => disneyPromessa.json())
        .then(disneyDados => PersoDados(disneyDados))
        .then(disneyTratado => alert('O nome do personagem é: '+ disneyTratado['name']+ '\n' + 'Filmes: ' + disneyTratado['films']))
        .catch(error => alert(error))
    }
    
}