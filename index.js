"use strict";

(() => {
  const loader = document.getElementById("loader");
  const loaderSr = document.getElementById('loader-sr');
  let progress = 0;

  const init = () => {
    loading();
  };

  const loading = () => {
    if (progress === 100) return;
    progress += 10;
    loader.value = progress;
    loaderSr.textContent = `${progress}%`;
    setTimeout(loading, 500);
  };

  init();
})();
