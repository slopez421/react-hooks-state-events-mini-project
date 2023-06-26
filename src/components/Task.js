import React from "react";

function Task({category, text, handleDelete}) {

function onClick(){
  handleDelete(text)
}
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onClick}>X</button>
    </div>
  );
}

export default Task;
