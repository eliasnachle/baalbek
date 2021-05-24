// Link Menu Lateral
const linkColorMenu = document.querySelectorAll('.nav-link');   
function colorLinkMenu(){
    linkColorMenu.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
}
linkColorMenu.forEach(i => i.addEventListener('click', colorLinkMenu));

/* ----------
Soluções FAQ
------------*/

// Conexão
function conexao_1(){
    var titulo = document.getElementById('current_title');
    var answer = document.getElementById('current_answer');
    current_link.innerHTML = `Por que estou tendo problemas de conexão?`;
    titulo.innerHTML = "Por que estou tendo problemas <br> de conexão?";
    answer.innerHTML = `
    <li>Verifieque se há alguma extensão bloqueando o conteúdo da página.</li>
    <li>Desligue o roteador, aguarde 10 minutos e ligue-o novamente.</li>
    <p>Não pode consertar?</p>
    <p>Envie uma mensagem <a href="#">aqui</a>.</p>
    `;  
}
function conexao_2(){
    var titulo = document.getElementById('current_title');
    var answer = document.getElementById('current_answer');
    current_link.innerHTML = `Como faço para impedir que o Painel exiba páginas em branco e mensagens de erro?`;
    titulo.innerHTML = `Como faço para impedir que o Painel exiba <br> páginas em branco e mensagens de erro?`;
    answer.innerHTML = `
    <p>Às vezes, você pode ver uma mensagem de erro que aparece ao tentar carregar determinados menus ou pesquisas dentro do Painel.</p> 
    <p>Para se livrar disso, existem algumas coisas que você pode tentar:</p> 
    <li>Tente sair e voltar ao Painel.</li>
    <li>Tente reiniciar o Navegador.</li>
    <p>Não pode consertar?</p>
    <p>Envie uma mensagem <a href="#">aqui</a>.</p>
    `;  
}