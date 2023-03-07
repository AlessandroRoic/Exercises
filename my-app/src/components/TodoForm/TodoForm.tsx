import { useEffect, useReducer, useState } from "react";
import { TodosAPI } from "../../apis/TodosAPI";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoForm.css";
import { initialState, todoReducer, TODO_ACTIONS } from "./todoReducer";

const TodoForm = () => {
  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoItems, dispatchTodoAction] = useReducer(todoReducer, initialState);

  const addTodo = () => {
    TodosAPI.addTodo({ label: todoInputValue, checked: false }).then((data) =>
      dispatchTodoAction({ type: TODO_ACTIONS.ADD, data })
    );
  };

  const onCheck = (id: number, checked: boolean) => {
    dispatchTodoAction({
      type: TODO_ACTIONS.CHECK,
      data: { id, checked: !checked },
    });
    TodosAPI.patchTodo(id, { checked: !checked });
  };

  const onDelete = (id: number) => {
    dispatchTodoAction({ type: TODO_ACTIONS.DELETE, data: { id } });
    TodosAPI.deleteTodo(id);
  };

  useEffect(() => {
    TodosAPI.getAllTodos(true).then((data) =>
      dispatchTodoAction({ type: TODO_ACTIONS.LOAD, data })
    );
  }, []);

  return (
    <div className="todo-form__wrapper">
      <div>
        <input
          className="todo-form__todo-input"
          type="text"
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
          placeholder="Add todo"
        />
        <button className="todo-form__add-button" onClick={addTodo}>Add</button>
      </div>
      <div>
        {todoItems.map(({ id, label, checked }) => (
          <TodoItem
            key={id}
            label={label}
            checked={checked}
            onCheck={() => onCheck(id, checked)}
            onDelete={() => onDelete(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoForm;
