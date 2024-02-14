import React from "react";
import { TodoId, type ListOfTodos, type Todo as TodoType } from "../types";
import Todo from "./Todo";

interface Props {
  todos: ListOfTodos;
  onRemoveTodo: ({ id }: TodoId) => void;
  onToggleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li className={`${todo.completed ? "completed" : ""}`} key={todo.id}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
