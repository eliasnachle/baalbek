// Funções Menu
function open_menu(){
    var body = document.getElementsByTagName('body')[0];
    var menu = document.getElementsByClassName('navbar-nav')[0];
    var open_menu = document.getElementsByClassName('navbar-hamburger')[0];
    var close_menu = document.getElementsByClassName('mobile-navar-close')[0];
    // Abrir Menu
    open_menu.addEventListener("click", function(){
        body.style.overflow = 'hidden';
        menu.style.left = '0';
    });
    // Fechar Menu
    close_menu.addEventListener("click", function(){
        body.style.overflow = 'unset';
        menu.style.left = '-1000px';
        menu.style.transition = '2s left ease-out';
    });
}

// Link Menu
const linkColor = document.querySelectorAll('.nav-link');   
function colorLink(){
    linkColor.forEach(i => i.classList.remove('active'));
    this.classList.add('active');
}

linkColor.forEach(i => i.addEventListener('click', colorLink));

window.onload = open_menu;