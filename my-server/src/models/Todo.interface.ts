export interface BaseTodo {
  label: string;
  checked: boolean;
}

export interface Todo extends  BaseTodo {
  id: number;
}
