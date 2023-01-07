"use strict";

(() => {
  const tbody = document.querySelector("tbody");
  let tableData = [];

  const getUserData = async () => {
    return await fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => console.log(error));
  };

  const mapDataToTable = (data) => {
    tableData = data.map((element) => ({
      name: `${element.name.title} ${element.name.first} ${element.name.last}`,
      email: element.email,
      gender: element.gender,
      phone: element.phone,
      location: `${element.location.city}, ${element.location.country}`,
    }));

    for (let element of tableData) {
      const tr = document.createElement("tr");
      Object.values(element).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.append(td);
      });
      tbody.append(tr);
    }
  };

  const createTable = () => {
    for (let element of tableData) {
      const tr = document.createElement("tr");
      Object.values(element).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.append(td);
      });
      tbody.append(tr);
    }
  };

  const sortTableBy = (property, isFlipped) => {
    document.querySelector("tbody").replaceChildren();
    tableData = tableData.sort((a, b) =>
      isFlipped
        ? b[property].localeCompare(a[property])
        : a[property].localeCompare(b[property])
    );
    createTable();
  };

  const init = () => {
    getUserData().then(mapDataToTable);
    const thElements = document.querySelectorAll("th");
    thElements.forEach((th) => {
      const button = th.querySelector("button");
      th.addEventListener("click", () => {
        const isFlipped = button.classList.toggle("sort-button--flipped");
        sortTableBy(th.querySelector("span").textContent, isFlipped);
      });
    });
  };

  init();
})();
