let nome = document.querySelector("#nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")


function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length < 3 ){
        txtNome.innerHTML = "Digite um nome que tenha acima de 3 caracters"
        txtNome.style.color = "black"
        nomeOk = false;
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Digite um e-mail válido"
        txtEmail.style.color = "black"
        emailOk = false;
    }else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true;
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(mensagem.value.length >= 500){
        txtAssunto.innerHTML = "Mensagem muito grande digite no máximo 500 caracters"
        txtAssunto.style.color = "black"
        emailOk = false;
    }else{
        txtAssunto.innerHTML = "Mensagem válida"
        txtAssunto.style.color = "green"
        emailOk = true
    }
}



