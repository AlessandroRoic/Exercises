import { Todo } from "../../models/Todo.interface";

export const initialState: Todo[] = [];

export enum TODO_ACTIONS {
  LOAD,
  CHECK,
  ADD,
  DELETE,
}

export type TodoAction = {
  type: TODO_ACTIONS;
  data: any;
};

export const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case TODO_ACTIONS.LOAD:
      return [...state, ...action.data];
    case TODO_ACTIONS.ADD:
      return [...state, action.data];
    case TODO_ACTIONS.CHECK: {
      const { id, checked } = action.data;
      return state.map((value) =>
        value.id === id ? { ...value, checked } : value
      );
    }
    case TODO_ACTIONS.DELETE: {
      const { id } = action.data;
      return state.filter((value) => value.id !== id);
    }
    default:
      return state;
  }
};
