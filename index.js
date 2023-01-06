"use strict";

(() => {
  class LoginPage extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.render();
      this.init();
    }

    init() {
      const localUsername = localStorage.getItem("username");
      const form = document.getElementById("form");
      const appDiv = document.getElementById("app");
      const username = document.getElementById("username");

      console.log(username.value);
      if (localUsername) {
        form.remove();
        appDiv.textContent = `Welcome ${localUsername}`;
        localStorage.clear();
      }

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (username.value && password.value) {
          localStorage.setItem("username", username.value);
          form.remove();
          appDiv.textContent = `Welcome ${username.value}`;
        }
      });
    }

    render() {
      this.innerHTML = `
      <form id="form">
        <div class="input__wrapper">
          <label for="username">Username</label> </br>
          <input id="username" type="text" placeholder="Enter username">
        </div>
        <div class="input__wrapper">
          <label for="password">Password</label> </br>
          <input id="password" type="password" placeholder="Insert password here">
        </div>
        <input type="submit" id="submit" value="Login"></button>
      </form>
      `;
    }
  }
  customElements.define("login-page", LoginPage);
})();
