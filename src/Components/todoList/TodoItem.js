import React from "react";

export default function TodoItem({ text, completed, toggleTodo }) {
  let style = completed ? { textDecoration: "line-through" } : null;
  return (
    <li style={style} onClick={toggleTodo}>
      {text}
    </li>
  );
}
