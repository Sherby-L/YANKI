//Выплывающее меню в шапке
const menuBurger = document.querySelector('.menuburger');
const popup = document.querySelector('.popup');

menuBurger.addEventListener('click', function () {
  popup.classList.toggle('popup-on');
});

const languageArrowWhite = document.querySelector('.language__choice-white');
const languageArrow = document.querySelector('.language__choice');
//Выбор языка выплывающее окно
const popupRu = document.querySelector('.language');
const popupLanguage = document.querySelector('.language-popup');
popupRu.addEventListener('click', function () {
  popupLanguage.classList.toggle('language-popup-on');
  languageArrow.classList.toggle('language__choice-on');
  languageArrowWhite.classList.toggle('language__choice-on');
});
