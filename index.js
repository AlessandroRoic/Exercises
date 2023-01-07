"use strict";

(() => {
  const Accordion = (title, content) => {
    const instance = document.createElement("div");
    instance.className = "accordion__wrapper";
    instance.innerHTML = `
    <button class="accordion__header" id="accordion-header">
      > ${title.toString()}
    </button>
    <div class="accordion__body">
      ${content.toString()}
    </div>
  `;
    const accordionHeader = instance.querySelector(".accordion__header");
    const accordionBody = instance.querySelector(".accordion__body");

    accordionHeader.addEventListener("click", () => {
      if (accordionBody.classList.contains("hidden")) {
        accordionBody.classList.remove("hidden");
      } else {
        accordionBody.classList.add("hidden");
      }
    });
    return instance;
  };

  document.body.append(Accordion("first accordion", "lorem ipsum"));
  document.body.append(Accordion("second accordion", "lorem ipsum"));
})();
