'use strict';

const burgerMenu = document.querySelector('.header__burger');
const closeBtn = document.querySelector('.header__burger-close');
const openBtn = document.querySelector('.header__burger-open');

burgerMenu.classList.add('hidden');

openBtn.addEventListener('click', e => {
      burgerMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', e => {
      burgerMenu.classList.add('hidden');
})

