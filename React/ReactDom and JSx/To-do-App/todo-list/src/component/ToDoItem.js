import React from "react";

function ToDoItem(props) {

  return (
    <div className='todo-item'>
      <input type="checkbox" />
      <label for={props.name}> Do the {props.name}</label>
    </div>
  );
}
export default ToDoItem
