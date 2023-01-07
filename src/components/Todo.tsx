import * as React from "react";
import { TodoList } from "./TodoList";
import { FormEvent, useState } from "react";

export const Todo = ({ headerLabel }: { headerLabel: string }) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoItem, setTodoItem] = useState<string>("");

  const addItem = (e: FormEvent) => {
    e.preventDefault();
    setTodoList([...todoList, todoItem]);
    setTodoItem("");
  };

  return (
    <div>
      <h2>{headerLabel}</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          onChange={(e) => setTodoItem(e.target.value)}
        ></input>
      </form>
      <TodoList list={todoList} />
    </div>
  );
};
