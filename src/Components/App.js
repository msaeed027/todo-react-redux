import React from "react";
import FilterContainer from "./filter/FilterContainer";
import AddTodoItemContainer from "./addTodoItem/AddTodoItemContainer";
import TodoListContainer from "./todoList/TodoListContainer";

export default class App extends React.Component {
  render() {
    return (
      <>
        <AddTodoItemContainer />
        <TodoListContainer />
        <FilterContainer />
      </>
    );
  }
}
