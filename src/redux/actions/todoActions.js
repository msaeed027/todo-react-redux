import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from "./actionTypes";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

export function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

export function setVisibilityFilter(visibilityFilter) {
  return {
    type: SET_VISIBILITY_FILTER,
    visibilityFilter
  };
}
