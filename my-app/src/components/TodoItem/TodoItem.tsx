import TrashIcon from "../../assets/TrashIcon";
import "./TodoItem.css";

type TodoItemProps = {
  label: string;
  checked: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

const TodoItem = ({ label, checked, onCheck, onDelete }: TodoItemProps) => {
  return (
    <div className="todo-item__wrapper">
      <>
        <input type="checkbox" onChange={onCheck} checked={checked} />
        <span style={checked ? { textDecoration: "line-through" } : {}}>
          {label}
        </span>
        <button onClick={onDelete}>
          <TrashIcon />
        </button>
      </>
    </div>
  );
};

export default TodoItem;
