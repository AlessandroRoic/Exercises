type TodoItemProps = {
  label: string;
}

const TodoItem = ({ label }: TodoItemProps) => {
  return (<div>{label}</div>);
};

export default TodoItem;
