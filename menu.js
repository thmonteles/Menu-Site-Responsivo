
const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.links');
const close = document.querySelector('.close');


  menu.addEventListener("click",() => {
    menu.classList.toggle('active');
    nav.classList.toggle('active');
    close.classList.toggle('active');
  });




