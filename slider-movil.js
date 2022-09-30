const slider = document.querySelector("#slider__movil");
if(document.querySelector('#slider__movil') != undefined) {
let slidersection = document.querySelectorAll(".slider__section--movil");
let slidersectionLast = slidersection[slidersection.length -1];

const btnLeft = document.querySelector("#btn-left-movil");
const btnRight = document.querySelector("#btn-right-movil");

slider.insertAdjacentElement('afterbegin', slidersectionLast);

function Next () {
    let slidersectionFirst = document.querySelectorAll(".slider__section--movil")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slidersectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function (){
    Next();
}
)

function Prev () {
    let slidersection = document.querySelectorAll(".slider__section--movil");
    let slidersectionLast = slidersection[slidersection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slidersectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function (){
    Next();
});

btnLeft.addEventListener('click', function (){
    Prev();
});

/* Función para que sea automático */

setInterval(function(){
    Next();
}, 8000);
}
let slidersection = document.querySelectorAll(".slider__section--movil");
let slidersectionLast = slidersection[slidersection.length -1];

const btnLeft = document.querySelector("#btn-left-movil");
const btnRight = document.querySelector("#btn-right-movil");

slider.insertAdjacentElement('afterbegin', slidersectionLast);

function Next () {
    let slidersectionFirst = document.querySelectorAll(".slider__section--movil")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slidersectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function (){
    Next();
}
)

function Prev () {
    let slidersection = document.querySelectorAll(".slider__section--movil");
    let slidersectionLast = slidersection[slidersection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function (){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slidersectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function (){
    Next();
});

btnLeft.addEventListener('click', function (){
    Prev();
});

/* Función para que sea automático */

setInterval(function(){
    Next();
}, 8000);