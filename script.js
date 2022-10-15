'use strict';
let btnShowModal = document.querySelectorAll('.show-modal');
let btnCloseModal = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');

const showModal = function (){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const hiddeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let index = 0; index < btnShowModal.length; index++)
    btnShowModal[index].addEventListener('click',showModal);


    overlay.addEventListener('click',hiddeModal);
    btnCloseModal.addEventListener('click',hiddeModal);