import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  let arr = ["laundry", "chores", "work"];


  return (
    <form className="todo-list">
      <ToDoItem name={arr[0]}/>
      <ToDoItem name={arr[1]}/>
      <ToDoItem name={arr[2]}/>
    </form>
  );
}
export default ToDoList;
