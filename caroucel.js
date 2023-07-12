"use strict";

let courucel = () => {
    //buttons
    const left = document.querySelector(".icon-left");
    const right = document.querySelector(".icon-right");

    // caroucel
    const conteiner = document.querySelector(".content__box_3").clientWidth - 10;
    const slider = document.querySelector(".content__box_slider");
    const  carts = document.querySelectorAll(".content__box_3-card");
    let cumuletiv = conteiner;

    //counter
    let counter = 0;
    const stepSize = carts[0].clientWidth + 20;


    right.addEventListener("click", ()=>{
        if ((slider.clientWidth - cumuletiv) < stepSize) {
            counter += slider.clientWidth - cumuletiv;
            slider.style.transform = "translateX(" + `${-(counter)}px )`;
            cumuletiv += (slider.clientWidth - cumuletiv)
            right.disabled = true;
        } else {
            counter += stepSize;
            slider.style.transform = "translateX(" + `${-counter}px )`;
            cumuletiv += stepSize;
        }
    });

    left.addEventListener("click", ()=>{
        if (cumuletiv - conteiner < stepSize) {
            counter -= (cumuletiv - conteiner)
            cumuletiv -= (cumuletiv - conteiner)
            slider.style.transform = "translateX(" + `${-counter}px )`;
        } else {
            counter -= stepSize;
            cumuletiv -= stepSize;
            slider.style.transform = "translateX(" + `${-counter}px )`;
        }
    });
}

let conteiner = window.addEventListener('resize', function() {
    courucel();
}, true);

window.addEventListener("load", () =>{
    courucel();
});
