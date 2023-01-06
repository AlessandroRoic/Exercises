"use strict";

(() => {
  const tabWrapper = document.querySelector(".tab__wrapper");
  const tabContent = document.querySelector(".tab__content");
  const propTabs = [
    { header: "Test1", content: "Lorem Ipsum Donet" },
    { header: "Test2", content: "Donet Ipsumm Lorem" },
  ];
  let tabHeaderRef = [];

  const initTabs = () => {
    tabContent.textContent = propTabs[0].content;
    propTabs.forEach((tab, index) => {
      const header = document.createElement("button");
      header.classList.add("tab__header");
      if (index === 0) header.classList.add("active");
      header.textContent = tab.header;
      header.dataset.key = index;
      tabHeaderRef.push(header);
      tabWrapper.append(header);
    });
    tabWrapper.addEventListener("click", openTab);
  };

  const openTab = (event) => {
    const index = event.target.dataset.key;
    tabContent.textContent = propTabs[index].content;
    tabHeaderRef.forEach((tabHeader, tabIndex) => {
      if (Number(index) !== tabIndex) {
        tabHeader.classList.remove("active");
      } else {
        tabHeader.classList.add("active");
      }
    });
  };

  initTabs();
})();
