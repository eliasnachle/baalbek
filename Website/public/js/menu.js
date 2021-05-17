// Funções Menu
function open_menu(){
    body.style.overflow = 'hidden';
    navbar.style.left = '0';
}
function close_menu(){
    body.style.overflow = 'unset';
    navbar.style.left = '-1000px';
    navbar.style.transition = '2s left ease-out';
}