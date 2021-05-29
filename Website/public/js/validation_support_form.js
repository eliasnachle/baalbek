/*------------------
Validação de Campos
-------------------*/
// Expressões Regulares
//Expressão Nome
var nameReg = /^[À-úA-z ]{3,}$/;
// Expressão Email
var emailReg = /^([À-úA-z0-9._-]+@[a-z0-9._-]+\.[A-z0-9_-]+)$/;
//Expressão Assunto
var subjectReg = /^[0-9À-úA-z ]{3,}$/;
//Expressão Mensagem
var messageReg = /^.{3,500}$/;
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
// Validação Assunto
function validate_subject(){
    // Variável Input
    var subject = ipt_subject.value;
    // Validação
    if(subject.match(subjectReg)){
        msg_validate_subject.innerHTML = '';
    } else {
        msg_validate_subject.innerHTML = 'Assunto inválido';
    }
}
// Validação Mensagem
function validate_message(){
    // Variável Input
    var message = ipt_message.value;
    // Validação
    if(message.match(messageReg)){
        msg_validate_message.innerHTML = '';
    } else {
        msg_validate_message.innerHTML = 'Verifique o campo preenchido';
    }
}
// Valida Todos os Campos
function validate_form(){
    // Valores dos Inputs
    var name = ipt_name.value;
    var email = ipt_email.value;
    var subject = ipt_subject.value;
    var message = ipt_message.value;
    // Vetores
    campos = [name,email,subject,message]
    regEx = [nameReg,emailReg,subjectReg,messageReg]
    // Validação
    for(i=0; i<4;i++){
        // Valida input
        if(campos[i].match(regEx[i])){
            // Se todos os campos estiverem válidos
            msg_validate_form.innerHTML = '';
            if(i==3){
                // Limpa os campos
                ipt_name.value = '';
                ipt_email.value = '';
                ipt_subject.value = '';
                ipt_message.value = '';
                // Retorna mensagem ao usuário
                msg_validate_form.innerHTML += 'Formulário enviado!';
                // Para o Loop
                break;
            }
        } else{
            // Retorna mensagem de erro ao usuário
            msg_validate_form.innerHTML = 'Verifique os campos preenchidos!';
            // Para o Loop
            break;
        }
    }
}