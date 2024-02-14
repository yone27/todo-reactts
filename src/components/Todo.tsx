import React from "react";
import { TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleCompleted,
}) => {
  const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleCompleted({ id, completed: e.target.checked });
  };
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={handleChangeCheckbox}
      />
      <label htmlFor="">{title}</label>
      <button className="destroy" onClick={() => onRemoveTodo({ id })}>
        Destroy
      </button>
    </div>
  );
};

export default Todo;
