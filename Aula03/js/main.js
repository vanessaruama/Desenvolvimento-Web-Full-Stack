// Olá Javascript

// Vai rodar quando a janela abrir
onload = function() {
    const fieldlogin = document.getElementById("login")
    const fieldpassword = document.getElementById("password")
    const fieldsavepsw = document.getElementById("savepsw")
    
    if (window.localStorage.getItem("savepsw")) {
        fieldlogin.value = window.localStorage.getItem("login")
        fieldpassword.value = window.localStorage.getItem("password")
        fieldsavepsw.checked = window.localStorage.getItem("savepsw")
    }
}    

function doLogin() {   
    // Tipo nome = valor
    const fieldlogin = document.getElementById("login")
    const fieldpassword = document.getElementById("password")
    const fieldsavepsw = document.getElementById("savepsw")
    
    //--teste-- console.log(fieldlogin.value)
    //--teste-- console.log(fieldpassword.value)
    //--teste-- console.log(fieldsavepsw.checked)

    const ischeckedsavepsw = fieldsavepsw.checked

    if (ischeckedsavepsw) {
        //Cria/Salva no localStorage
        window.localStorage.setItem("login",  fieldlogin.value)
        window.localStorage.setItem("password",  fieldpassword.value)
        window.localStorage.setItem("savepsw",  fieldpassword.checked)
    } else {
        //Remove do localStorage
        window.localStorage.removeItem("login")
        window.localStorage.removeItem("password")
        window.localStorage.removeItem("savepsw")
    }
}

/*
localStorage.setItem() para criar um novo par de chave: valor
localStorage.getItem() para recuperar o valor do par chave: valor
localStorage.romoveItem() para remover um par específico
localStorage.clear() apaga TODOS os pares gravados pra aquele domínio

block - embaixo um do outro
inline - ao lado
*/