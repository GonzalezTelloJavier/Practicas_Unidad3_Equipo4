const menudeslizable = document.querySelector('.menu-deslizable');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');

menudeslizable.addEventListener('click', function() {
  nav.classList.toggle('show');
});

closeMenu.addEventListener('click', function() {
  nav.classList.toggle('show');
});



