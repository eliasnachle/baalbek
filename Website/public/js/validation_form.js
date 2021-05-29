/*--------------
Frase Aleatória
---------------*/
function random_phrase(){
    // Frases
    var list_phrases = ['A icônica introdução da música "O Ciclo da Vida" de "O Rei Leão", traduzida, diz "Lá vem um leão, ah sim, é um leão',
    'O nome do protagonista da série “Naruto” significa redemoniho e é também o nome de uma cidade em Tokushima Prefecture of Japan, denominada Naruto.',
    'O próprio Godzilla só foi visto por cerca de 8 minutos no filme de 2014 “Godzilla”.',
    'Pocahontas é a única princesa da Disney que possui uma tatuagem.',
    'Nas gravações de "O Exorcista", o diretor William Friedkin pedia para algumas pessoas da equipe darem tiros de mentira para assustar o elenco.',
    'O filme "Pânico" foi inspirado em fatos reais que ocorreram em Gainesville, Flórida (EUA), no início dos anos 90.',
    'O especial de comédia de Eddie Murphy "Delirious" (1983) inspirou o filme "Corra".'];
    // Pega um frase aleatória
    var list_phrases = list_phrases[Math.floor(Math.random()*list_phrases.length)];
    // Adiciona na Página
    frase.innerHTML += `${list_phrases}`;
}
// Carrega função junto com a página
window.onload = random_phrase;

/*------------------
Validação de Campos
-------------------*/
// Expressões Regulares
//Expressão Nome
var nameReg = /^[À-úA-z ]{3,}$/;
// Expressão Email
var emailReg = /^([À-úA-z0-9._-]+@[a-z0-9._-]+\.[A-z0-9_-]+)$/;//Expressão Usuário
// Expressão Usuário
var userReg = /^[A-z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;
//Expressão Senha
var passwordReg = /^(?=.*[0-9]{3})(?=.*[A-Z]{1})(?=.*[a-z]{1})[a-zA-Z0-9]{6,}$/;
// Validação Nome
function validate_name(){
    // Variável Input
    var name = ipt_name.value;
    // Validação
    if(name.match(nameReg)){
        msg_validate_name.innerHTML = '';
    } else {
        msg_validate_name.innerHTML = 'Nome inválido';
    }
}
// Validação E-mail
function validate_email(){
    // Variável Input
    var email = ipt_email.value;
    // Validação
    if(email.match(emailReg)){
        msg_validate_email.innerHTML = '';
    } else {
        msg_validate_email.innerHTML = 'E-mail inválido';
    }
}
// Validação Data
// function validate_date(){
//     // Data de Nascimento Usuário
//     var dateUser = +new Date(ipt_date.value);
//     // Calculo Idade
//     // TESTAR COM GET TIME ONDE TIRA 24 HORAS
//     var idade = ((+new Date() - dateUser - 86400000 ) /31557600000);
//     console.log(idade);
//     // Validação
//     if (idade < 10){    
//         msg_validate_date.innerHTML = 'Você precisa ter pelo menos 10 anos'
//     } else {
//         msg_validate_date.innerHTML = ''
//     }
// }
// Validação Usuário
function validate_user(){
    // Variável Input
    var user = ipt_user.value;
    // Validação
    if(user.match(userReg)){
        msg_validate_user.innerHTML = '';
    } else {
        msg_validate_user.innerHTML = 'Usuário Inválido';
    }
}
// Validação Senha
function validate_password(){
    // Variável Input
    var password = ipt_password.value;
    // Validação
    if(password.match(passwordReg)){
        msg_validate_password.innerHTML = '';
    } else {
        msg_validate_password.innerHTML = 'Senha inválida';
    }
}
// Valida Todos os Campos
function validate_form(){
    // Valores dos Inputs
    var name = ipt_name.value;
    var email = ipt_email.value;
    var user = ipt_user.value;
    var password = ipt_password.value;
    campos = [name,email,user,password]
    regEx = [nameReg,emailReg,userReg,passwordReg]
    // Validação
    for(i=0; i<5;i++){
        if(campos[i].match(regEx[i])){
            // Se todos os campos estiverem válidos
            if(i==3){
                cadastrar();
                break;
            }
        } else{
            msg_validate_register.innerHTML = `Verifique os Campos preenchidos!`;
            break;
        }
    }
}
// Válida o Usuário
function cadastroRealizado(){
    form_container.style.display = 'none';
    form_btn.style.display = 'none';
    form_cadastro.innerHTML += `
    <div class="container-verify-email">
    <img src="imgs/verify_email.svg"/>
    <h1>Cadastrado com sucesso!</h1>
    <p style="white-space:unset;padding:1em 0;">Sua conta foi criado, clique no botão abaixo<br>
    para acessar sua conta, e ter acesso ao mundo Baalbek!</p>        
    <div class="form-btn">
        <button class="btn"><a href="login.html">Acesse sua conta</a></button>
    </div>
    </div>`
}
// Cadastra Usuário
function cadastrar() {
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        if (response.ok) {
            cadastroRealizado();
        } else {
            msg_validate_register.innerHTML = `Usuário já cadastrado!`;
        }
    });

    return false;
}