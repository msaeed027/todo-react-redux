import React from "react";

import TodoItem from "./TodoItem";

export default function TodoList({ todos, visibilityFilter, toggleTodo }) {
  return (
    <ol>
      {todos.map((todo, i) => {
        return (
          <TodoItem
            key={i}
            toggleTodo={() => toggleTodo(i)}
            text={todo.text}
            completed={todo.completed}
          />
        );
      })}
    </ol>
  );
}
