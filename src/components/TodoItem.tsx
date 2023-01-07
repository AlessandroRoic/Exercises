import * as React from 'react';

export const TodoItem = ({ label, keyValue }: {label: string, keyValue: number}) => {
  const [isDone, setDone] = React.useState(false);

  return (
    <div className="todo__item" key={keyValue}>
      <label style={isDone ? { textDecoration: 'line-through' } : {}}>
        <input
          type="checkbox"
          onChange={(e) => setDone(e.target.checked)}
          checked={isDone}
        />
        {label}
      </label>
    </div>
  );
};
