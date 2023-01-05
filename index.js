'use strict';

(() => {
  const appDiv = document.getElementById('app');
  const username = document.getElementById('username');
  const password = document.getElementById('password');
  const form = document.getElementById('form');

  const localUsername = localStorage.getItem('username');

  if (localUsername) {
    form.remove();
    appDiv.textContent = `Welcome ${localUsername}`;
    localStorage.clear();
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (username.value && password.value) {
      localStorage.setItem('username', username.value);
      form.remove();
      appDiv.textContent = `Welcome ${username.value}`;
    }
  });
})();

