import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "grey",
    textDecoration: "line-through",
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)} //receives an id therefore cannot directly type props.handleChange
      />
      <p style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </p>
    </div>
  );
}

export default TodoItem;
