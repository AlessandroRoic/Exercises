"use strict";

(() => {
  const form = document.querySelector("#todo-form");
  const input = document.querySelector("#todo-input");
  const todoList = document.querySelector(".todo__list");

  const createItem = (label) => {
    const todoItem = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("click", (e) => {
      todoItem.className = e.target.checked ? "todo__item--checked" : "";
    });
    todoItem.appendChild(checkbox);
    todoItem.append(`${label}`);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener("click", () => {
      todoItem.remove();
    });
    todoItem.append(deleteButton);
    return todoItem;
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    todoList.append(createItem(input.value));
    input.value = "";
  });
})();
