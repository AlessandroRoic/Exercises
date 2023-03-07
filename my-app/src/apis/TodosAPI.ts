import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";
import { BaseTodo, Todo } from "../models/Todo.interface";

const TODO_URL = "/todos";

export const TodosAPI = {
  getAllTodos: async (cancel = false): Promise<Todo[]> => {
    const todos = await api.get(TODO_URL, {
      signal: cancel
        ? cancelApiObject["getAllTodos"].handleRequestCancellation().signal
        : undefined,
    });
    return todos.data;
  },
  addTodo: async (data: BaseTodo): Promise<Todo> => {
    const todo = await api.post(TODO_URL, data);
    return todo.data;
  },
  patchTodo: async (
    id: number,
    updatedFields: Partial<BaseTodo>
  ): Promise<Todo> => {
    const todo = await api.patch(`${TODO_URL}/${id}`, updatedFields);
    return todo.data;
  },
  deleteTodo: async (id: number): Promise<Todo> => {
    const todo = await api.delete(`${TODO_URL}/${id}`);
    return todo.data;
  },
};

const cancelApiObject = defineCancelApiObject(TodosAPI);
