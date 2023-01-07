import * as React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ list }: {list: string[]}) => {
  return (
    <div className="todo__list">
      {list.map((label, index) => (
        <TodoItem label={label} keyValue={index} />
      ))}
    </div>
  );
};
