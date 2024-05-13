const buttonMenu = document.querySelector('.menu-img');

buttonMenu.addEventListener('click', () => {
    const menu = document.querySelector('.desplegable');
    menu.classList.toggle('activate');
    buttonMenu.src = menu.classList.contains('activate') ? '../../public/cancelar.png' : '../../public/Img/menu.png';
    // si esta activo y el tamaño de la pantalla es mayor a 768px desactivar el despelgable
    if (menu.classList.contains('activate') && window.innerWidth > 768) {
        menu.classList.remove('activate');
        buttonMenu.src = '../../public/Img/menu.png';
    }
}
)
