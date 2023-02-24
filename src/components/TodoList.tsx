import TodoItem from "./TodoItem";

const TodoList = ({
  list,
  deleteItem,
}: {
  list: string[];
  deleteItem: (index: number) => void;
}) => {
  return (
    <div className="todo__list">
      {list.map((label, index) => (
        <TodoItem
          label={label}
          key={index}
          deleteItem={() => deleteItem(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;