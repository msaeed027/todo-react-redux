import { connect } from "react-redux";
import AddTodoItem from "./AddTodoItem";
import { addTodo as addTodoActionCreator } from "../../redux/actions/todoActions";

function mapDispatchToProps(dispatch) {
  return {
    addTodoHandler: todoItem => dispatch(addTodoActionCreator(todoItem))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoItem);
