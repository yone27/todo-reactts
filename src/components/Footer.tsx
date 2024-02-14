import React from "react";
import Filters from "./Filters";
import { FilterValue } from "../types";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  handleFilterChange: (filter: FilterValue) => void;
}

const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  filterSelected,
  onClearCompleted,
  handleFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong> Tareas pendientes.
      </span>
      <Filters filterSelected={filterSelected} onFilterChange={() => {}} />
    </footer>
  );
};

export default Footer;
