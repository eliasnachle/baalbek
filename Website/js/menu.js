// Funções Menu
function open_menu(){
    navbar.style.left = '0';
    body.style.overflow = 'hidden';
}
function close_menu(){
    navbar.style.left = '-1000px';
    navbar.style.transition = '2s left ease-out';
    body.style.overflow = 'unset';
}