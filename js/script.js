function menu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_hamb_fechado.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/menu_hamb_aberto.png";
    }
}
