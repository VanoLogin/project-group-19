const menu = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close-btn');
const links = document.querySelectorAll('.modal-menu-list a');
const orderBtn = document.querySelector('.modal-order-btn');
const menuOpenBtn = document.getElementById('menu-btn');
const svgBtnOpenBurger = document.getElementById('icon-burger-btn-open');



closeBtn.addEventListener('click', menuClose);
menuOpenBtn.addEventListener('click', menuOpen);
svgBtnOpenBurger.addEventListener('click', menuOpen);



function menuClose() {
  menu.classList.remove('is-open');
}

function menuOpen() {
  menu.classList.add('is-open');
}

links.forEach(link => {
  link.addEventListener('click', () => {
    menuClose();
  });
});
orderBtn.addEventListener('click', () => {
  menuClose();
});
