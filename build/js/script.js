'use strict';
var phoneInput = document.querySelector('#tel');
var pageHeader = document.querySelector('.nav');
var body = document.querySelector('body');
var headerToggle = document.querySelector('.nav__toggle');
pageHeader.classList.remove('nav--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('nav--closed')) {
    pageHeader.classList.remove('nav--closed');
    pageHeader.classList.add('nav--opened');
    body.style.overflow = 'hidden';
  } else {
    pageHeader.classList.add('nav--closed');
    pageHeader.classList.remove('nav--opened');
    body.style.overflow = 'visible';
  }
});

phoneInput.addEventListener('input', function () {
  var phoneNumber = document.querySelector('#tel').value;
  var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

  if (!regex.test(phoneNumber)) {
    phoneInput.setCustomValidity('Неправильный формат');
  } else {
    phoneInput.setCustomValidity('');
  }
});
