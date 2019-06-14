import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map((todo, i) =>
        i === action.index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}
