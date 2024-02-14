import React from "react";
import { FILTERS_BUTTONS } from "../consts";
import { FilterValue } from "../types";
interface Props {
  filterSelected: FilterValue;
  onFilterChange: (filter: FilterValue) => void;
}

const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
  const handleClick = (filter: FilterValue) => {};
  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        let isSelected = key === filterSelected;

        return (
          <li key={key}>
            <a
              className={`${isSelected && "selected"}`}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(key as FilterValue);
              }}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
