const btnMenu = document.querySelectorAll('button.toggle-menu');
const menu = document.querySelector('ul.container-links');

const toggleMenu = () => {
    if (menu.getAttribute('data-active') === 'true') {
        document.body.removeAttribute('style');
        menu.setAttribute('data-active', 'false');
    } else {
        document.body.setAttribute('style', 'overflow: hidden')
        menu.setAttribute('data-active', 'true');
    }

}

btnMenu.forEach(button => {
    button.addEventListener('click', toggleMenu);
})


//First Carousel script

const presentationCarousel = document.querySelector('section#apresentation-carousel');
var backgroundImage = document.querySelector('div.background-image');
var carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
    const urlImage = item.getAttribute('data-image');
    //set background
    item.setAttribute('style', `background-image: url('${urlImage}')`);
})

const doAnimationCarousel = (type) => {
    let backgroundImage = document.querySelector('div.background-image');
    if (type === 'next') {
        //Remove class if exist
        backgroundImage.classList.add('fade-out');
        backgroundImage.classList.remove('fade-in');
        for (let i = 1; i <= carouselItems.length; i++) {
            returnItemPosition(i).classList.remove('fade-in');
            returnItemPosition(i).classList.remove('fade-out');
        }
        //Add class to animate
        setTimeout(() => {
            backgroundImage.classList.remove('fade-out');
            backgroundImage.classList.add('fade-in');
        }, 10)
        if (carouselItems.length > 2) {
            returnItemPosition(1).classList.add('fade-in');
            returnItemPosition(3).classList.add('fade-out');
        } else {
            returnItemPosition(1).classList.add('fade-in');
            returnItemPosition(2).classList.add('fade-out');
        }


    } else if (type === 'prev') {
        //Remove class if exist
        backgroundImage.classList.add('fade-out');
        backgroundImage.classList.remove('fade-in');
        for (let i = 2; i >= 1; i--) {
            returnItemPosition(i).classList.remove('fade-in');
            returnItemPosition(i).classList.remove('fade-out');
        }
        //Add class to animate
        setTimeout(() => {
            backgroundImage.classList.remove('fade-out');
            backgroundImage.classList.add('fade-in');
        }, 10)
        returnItemPosition(1).classList.add('fade-in');
        returnItemPosition(2).classList.add('fade-out');

    }
}
const returnItemPosition = position => {
    let carouselItems = document.querySelectorAll('.carousel-item');
    for (let i = 0; i < carouselItems.length; i++) {
        if (Number.parseInt((carouselItems[i]).getAttribute('data-position')) === position) {
            return carouselItems[i];
        }
    }
}


const changeBackgroundImage = () => {
    let url = returnItemPosition(1).getAttribute('data-image');
    backgroundImage.setAttribute('style', `background-image: url('${url}')`);

}
const nextItem = () => {

    let carouselItems = document.querySelectorAll('.carousel-item');
    let position;
    let items = [];
    for (let i = 1; i <= carouselItems.length; i++) {
        items.push(returnItemPosition(i));
    }

    for (let i = 1; i <= carouselItems.length; i++) {
        position = (i === 1) ? carouselItems.length : i - 1;
        items[i - 1].setAttribute('data-position', position);
    }
    doAnimationCarousel('next')
    changeBackgroundImage()
}
const prevItem = () => {

    let carouselItems = document.querySelectorAll('.carousel-item');
    let position;
    let items = [];
    for (let i = 1; i <= carouselItems.length; i++) {
        items.push(returnItemPosition(i));
    }

    for (let i = 1; i <= carouselItems.length; i++) {
        position = (i === carouselItems.length) ? 1 : i + 1;
        items[i - 1].setAttribute('data-position', position);

    }
    doAnimationCarousel('prev');
    changeBackgroundImage()
}
changeBackgroundImage()


//Change filter products

const btnProdFilter = document.querySelectorAll('button.prod-filter');
const addFilter = (id) => {
    console.log()
    const btnMasc = document.querySelector('button#masculino');
    const btnFemi = document.querySelector('button#feminino');
    const mascLine = document.querySelector('.masc.line');
    const femiLine = document.querySelector('.femi.line');

    btnMasc.classList.remove('active');
    btnFemi.classList.remove('active');
    mascLine.classList.remove('active');
    femiLine.classList.remove('active');
    if (id === 'masculino') {
        mascLine.classList.add('active');
        btnMasc.classList.add('active');
    } else {
        femiLine.classList.add('active');
        btnFemi.classList.add('active');
    }
}
btnProdFilter.forEach(btn => {
    btn.addEventListener('click', () => addFilter(btn.getAttribute('id')))
})