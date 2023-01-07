"use strict";

(() => {
  function debounce(callback, duration) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(...args), duration);
    };
  }

  const input = document.getElementById("test");
  input.addEventListener(
    "keydown",
    debounce((event) => {
      console.log(event.target.value);
    }, 700)
  );
})();
