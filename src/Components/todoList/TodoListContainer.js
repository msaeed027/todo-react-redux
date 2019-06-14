import { connect } from "react-redux";
import TodoList from "./TodoList";
import { toggleTodo } from "../../redux/actions/todoActions";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../../constants/visibilityFilters";
function getVisibileTodos(todos, visibilityFilter) {
  switch (visibilityFilter) {
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_ALL:
    default:
      return todos;
  }
}

const mapStateToProps = state => ({
  todos: getVisibileTodos(state.todos, state.visibilityFilter)
});

function mapDispatchToProps(dispatch) {
  return {
    toggleTodo: index => dispatch(toggleTodo(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
