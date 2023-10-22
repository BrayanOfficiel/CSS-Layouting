const menuBtn = document.querySelector('.logo');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
});
