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
var nameReg = /^[a-zA-Z ]{1,}$/;
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
    var validacao = email.indexOf('@') && email.indexOf('.') >= 1;
    // Validação
    if(validacao >= 1){
        msg_validate_email.innerHTML = '';
    } else {
        msg_validate_email.innerHTML = 'E-mail inválido';
    }
}
// Validação Data
function validate_date(){
    // Data de Nascimento Usuário
    var dateUser = +new Date(ipt_date.value);
    // Calculo Idade
    // TESTAR COM GET TIME ONDE TIRA 24 HORAS
    var idade = ((+new Date() - dateUser - 86400000 ) /31557600000);
    console.log(idade);
    // Validação
    if (idade < 10){    
        msg_validate_date.innerHTML = 'Você precisa ter pelo menos 10 anos'
    } else {
        msg_validate_date.innerHTML = ''
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
        msg_validate_password.innerHTML = 'Senha    inválida';
    }
}
/*-----------------
 Enviar Formulário
------------------*/
// function enviar(){
//     // Variáveis Inputs
//     var name = ipt_name.value;
//     var email = ipt_email.value;
//     var validacao_email = email.indexOf('@') && email.indexOf('.') >= 1;
//     var dateUser = +new Date(ipt_date.value);
//     var idade = ((+new Date() - dateUser) /31557600000);
//     var password = ipt_password.value;
//     // Validação
//     if(name.match(nameReg) && validacao_email >=1 && idade >= 18 && password.match(passwordReg)){
//         // Variáveis
//         // Escondendo Campos
//         form_container.style.display = 'none';
//         form_btn.style.display = 'none';
//         // Atualizando HTML
//         form.innerHTML += `
//         <div class="container-verify-email">
//         <h1>Verifique sua Conta</h1>
//         <p>Confira sua caixa de entrada e siga as instruções para
//         verificar sua conta e ter acesso ao mundo Baalbek.</p>
//         <img src="imgs/verify_email.svg"/>
//         </div>`
//     } else {
//         msg_valitadate.innerHTML = `Verifique os Campos Preenchidos!`;
//     }
// }
function enviar(){
        form_container.style.display = 'none';
        form_btn.style.display = 'none';
        form.innerHTML += `
        <div class="container-verify-email">
        <h1>Verifique sua Conta</h1>
        <p>Confira sua caixa de entrada e siga as instruções para
        verificar sua conta e ter acesso ao mundo Baalbek.</p>
        <img src="imgs/verify_email.svg"/>
        </div>`
}