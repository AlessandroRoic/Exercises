'use strict';

(() => {
  const username = document.getElementById('username');
  const usernameError = document.getElementById('username-error');
  let usernameValid = false;
  const password = document.getElementById('password');
  const passwordError = document.getElementById('password-error');
  let passwordValid = false;
  const form = document.getElementById('form');
  const formError = document.getElementById('form-error');

  const init = () => {
    username.addEventListener(
      'keyup',
      debounce((event) => {
        const value = event[0].target.value;
        if (value.match(/\d+/g)) {
          usernameError.textContent = 'No numbers in username';
          usernameValid = false;
        } else {
          usernameError.textContent = '';
          usernameValid = true;
        }
      }, 300)
    );

    password.addEventListener(
      'keyup',
      debounce((event) => {
        const value = event[0].target.value;
        if (value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
          passwordError.textContent = '';
          passwordValid = true;
        } else {
          passwordError.textContent = 'password not valid';
          passwordValid = false;
        }
      }, 300)
    );

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (passwordValid && usernameValid) {
        formError.textContent = '';
        console.log([username.value, password.value]);
      } else {
        formError.textContent = 'Some values are invalid';
      }
    });
  };

  const debounce = (callback, duration) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(args), duration);
    };
  };

  init();
})();
