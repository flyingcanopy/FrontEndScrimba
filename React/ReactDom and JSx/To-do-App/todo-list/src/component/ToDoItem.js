import React from "react"
// {
//   id: 1,
//   text: "Take out the trash",
//   completed: true
// }
function ToDoItem(props) {
    let todoItem = props.todoItem
    console.log(todoItem)
    return (
        <div className="todo-item">
            <input type="checkbox" checked={todoItem.completed}/>
            <p>{todoItem.text}</p>
        </div>
    )
}

export default ToDoItem