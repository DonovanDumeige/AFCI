"use strict"
const lis = document.querySelectorAll('#slider ul li');
const liPair = document.querySelectorAll('#slider ul li:nth-child(odd)');
const slider = document.querySelector(' #slider');
const prev = document.querySelector('.control_prev');
const next = document.querySelector('.control_next')
const ul = document.querySelector('#slider ul');
const checkbox = document.querySelector('#checkbox');


let idInterval;


document.addEventListener("DOMContentLoaded", function () {
    liPair.forEach(li => {
        li.style.background = '#aaa';
    });
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            idInterval = setInterval(moveRight, 1500)
        } else {
            clearInterval(idInterval)
        }
    });
})
let slideCount = lis.length;
let slideWidth = lis[0].getBoundingClientRect().width;
let slideHeight = lis[0].getBoundingClientRect().height;
let sliderUlWidth = slideCount * slideWidth;

slider.style.width = slideWidth + 'px';
slider.style.height = slideHeight + 'px';

ul.style.width = sliderUlWidth + 'px';
ul.style.marginLeft = -slideWidth + 'px';


ul.prepend(document.querySelector('#slider ul li:last-child'))

function moveLeft() {
    let anime = ul.animate({
        left: [0, slideWidth + "px"]
    }, {
        duration: 200,
        fill: "forwards"
    });
    anime.onfinish = () => {
        anime.cancel();
        ul.prepend(document.querySelector('#slider ul li:last-child'));
    }
}

function moveRight() {
    let anime = ul.animate({
        left: [0, -slideWidth+"px"]
    }, {
        duration: 200,
        fill: "forwards"
    });
    anime.onfinish = () => {
        anime.cancel();
        ul.append(document.querySelector('#slider ul li:first-child'));
    }
}

prev.addEventListener('click', moveLeft)
next.addEventListener('click', moveRight)