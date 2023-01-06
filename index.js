"use strict";

(() => {
  const handleModalClosed = (event, modal) => {
    event.preventDefault();
    if (
      event.target.matches(".modal") ||
      event.target.matches(".modal__close")
    ) {
      modal.classList.remove("modal--open");
    }
  };

  const handleModalOpened = (event) => {
    if (event.target.dataset.modal) {
      event.preventDefault();
      const modal = document.getElementById(event.target.dataset.modal);
      modal.classList.add("modal--open");
      modal.addEventListener("click", (event) =>
        handleModalClosed(event, modal)
      );
    }
  };

  const init = () => {
    document.addEventListener("click", handleModalOpened, false);
  };

  init();
})();
