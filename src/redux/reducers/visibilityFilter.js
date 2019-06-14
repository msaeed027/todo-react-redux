import { SET_VISIBILITY_FILTER } from "../actions/actionTypes";
import { SHOW_ALL } from "../../constants/visibilityFilters";

export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.visibilityFilter;
    default:
      return state;
  }
}
