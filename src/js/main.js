//Выплывающее меню в шапке
const menuBurger = document.querySelector('.menuburger');
const popup = document.querySelector('.popup');
const bodyWrapper = document.querySelector('body');

menuBurger.addEventListener('click', function () {
  popup.classList.toggle('popup-on');
  bodyWrapper.classList.toggle('scroll-off'); //блокировка прокрутки при окрытом меню
});

const languageArrow = document.querySelector('.language__choice');

//Выбор языка выплывающее окно
const popupRu = document.querySelector('.language');
const popupLanguage = document.querySelector('.language-popup');
popupRu.addEventListener('click', function () {
  popupLanguage.classList.toggle('language-popup-on');
  languageArrow.classList.toggle('language__choice-on');
});

//footer выплывающие блоки
const companyText = document.querySelectorAll('.company__text');
const compenyTextInfo = document.querySelectorAll('.company__text-info');
const companyArrow = document.querySelectorAll('.company__arrow');

companyText.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    compenyTextInfo[index].classList.toggle('company__text-on');
    companyArrow[index].classList.toggle('company__arrow-on');
  });
});

//Card выплывающие блоки подробности
const parametrsBlock = document.querySelectorAll('.parametrs__block');
const parametrsBlockInfo = document.querySelectorAll('.parametrs__block-info');
const parametrsBlockArrow = document.querySelectorAll(
  '.parametrs__block-arrow'
);

parametrsBlock.forEach((elem, index) => {
  elem.addEventListener('click', function () {
    parametrsBlockInfo[index].classList.toggle('parametrs__block-info-on');
    parametrsBlockArrow[index].classList.toggle('company__arrow-on');
  });
});
