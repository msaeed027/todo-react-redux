import React from "react";
import FilterButton from "./FilterButton";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../../constants/visibilityFilters";

export default function Filter({ visibilityFilter, applyFilter }) {
  return (
    <div>
      <FilterButton visibilityFilter={visibilityFilter} onClick={applyFilter}>
        {SHOW_ALL}
      </FilterButton>
      <FilterButton visibilityFilter={visibilityFilter} onClick={applyFilter}>
        {SHOW_COMPLETED}
      </FilterButton>
      <FilterButton visibilityFilter={visibilityFilter} onClick={applyFilter}>
        {SHOW_ACTIVE}
      </FilterButton>
    </div>
  );
}
