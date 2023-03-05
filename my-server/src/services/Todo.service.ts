import { Todos } from "../models/Todos.interface";
import { Todo } from "../models/Todo.interface";

let todos: Todos = {
  1: {
    id: 1,
    label: "test label",
    checked: false,
  },
  2: {
    id: 2,
    label: "test label 2",
    checked: true,
  },
};

export const findAll = async (): Promise<Todo[]> => Object.values(todos);

export const find = async (id: number): Promise<Todo> => todos[id];

export const create = async (newTodo: Todo): Promise<Todo> => {
  const id = new Date().valueOf();
  todos[id] = {
    id,
    ...newTodo,
  };
  return todos[id];
};

export const update = async (id:number, updatedTodo: Todo): Promise<Todo | null> => {
  const todo = await find(id);
  if (!todo) return;
  todos[id] = {id, ...updatedTodo}
  return todos[id]
}

export const remove = async (id:number): Promise<null | void> => {
  const todo = await find(id);
  if (!todo) return;
  delete todos[id]
}
