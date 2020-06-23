const btnMenu = document.querySelectorAll('button.toggle-menu');
const menu = document.querySelector('ul.container-links');

const toggleMenu = () => {
    if(menu.getAttribute('data-active') === 'true'){
        document.body.removeAttribute('style');
        menu.setAttribute('data-active', 'false');
    }else{
        document.body.setAttribute('style', 'overflow: hidden')
        menu.setAttribute('data-active', 'true');
    }

}

btnMenu.forEach(button => {
    button.addEventListener('click', toggleMenu);
})
