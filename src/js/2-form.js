'use strict';

const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const email = form.elements.email;
const message = form.elements.message;

const savedSettings = localStorage.getItem('feedback-form-state');
const parsed = JSON.parse(savedSettings);
// console.log(parsed);
email.value = formData.email = parsed?.email ?? '';
message.value = formData.message = parsed?.message ?? '';

const formevent = function (event) {
  const name = event.target.name;
  const value = event.target.value;
  if (name === 'email') {
    formData.email = value;
    // console.log(formData);
  } else if (name === 'message') {
    formData.message = value;
  }
  // console.log(formData);

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const formSubmit = function (event) {
  event.preventDefault();

  if (email.value === '' || message.value === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
    formData.email = '';
    formData.message = '';
  }
};
form.addEventListener('input', formevent);

form.addEventListener('submit', formSubmit);//