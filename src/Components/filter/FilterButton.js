import React from "react";

export default function FilterButton({ visibilityFilter, onClick, children }) {
  return (
    <button
      style={{
        backgroundColor: visibilityFilter === children ? "green" : ""
      }}
      onClick={() => onClick(children)}
    >
      {children}
    </button>
  );
}
