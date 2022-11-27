let menuBurger = document.querySelector('.menuburger');
let popup = document.querySelector('.popup');

menuBurger.addEventListener('click', function () {
  popup.classList.toggle('popup-on');
});
