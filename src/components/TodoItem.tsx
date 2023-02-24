import { useState } from "react";

const TodoItem = ({
  label,
  deleteItem,
}: {
  label: string;
  deleteItem: () => void;
}) => {
  const [isDone, setDone] = useState(false);

  return (
    <div className="todo__item">
      <label style={isDone ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          onChange={(e) => setDone(e.target.checked)}
          checked={isDone}
        />
        {label}
        <button onClick={deleteItem}>❌</button>
      </label>
    </div>
  );
};

export default TodoItem;