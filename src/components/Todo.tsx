import { FormEvent, useState } from "react";
import TodoList from "./TodoList";

const Todo = ({ headerLabel }: { headerLabel: string }) => {
  const [todoList, setTodoList] = useState<string[]>([]);
  const [todoItem, setTodoItem] = useState<string>("");

  const addItem = (e: FormEvent) => {
    e.preventDefault();
    setTodoList([...todoList, todoItem]);
    setTodoItem("");
  };

  const deleteItem = (itemIndex: number) => {
    setTodoList((list) => list.filter((item, index) => index !== itemIndex));
  };

  return (
    <div>
      <h2>{headerLabel}</h2>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}></input>
      </form>
      <TodoList list={todoList} deleteItem={deleteItem} />
    </div>
  );
};

export default Todo;
