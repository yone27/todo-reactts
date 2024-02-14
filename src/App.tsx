import React, { useState } from "react";
import Todos from "./components/Todos";
import { TodoId, type Todo as TodoType } from "./types";

const mockTodos = [
  {
    id: 1,
    title: "Repasar betas de react",
    completed: false,
  },
  {
    id: 2,
    title: "Aprender typescript",
    completed: false,
  },
  {
    id: 3,
    title: "hacer ejericio hoy",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(mockTodos);

  const handleRemove = ({ id }: TodoId) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleCompleted = ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => {
    let newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
      />
    </div>
  );
};

export default App;
