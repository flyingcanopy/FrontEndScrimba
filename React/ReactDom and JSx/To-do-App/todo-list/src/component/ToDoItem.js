import React from "react";
// {
//   id: 1,
//   text: "Take out the trash",
//   completed: true
// }
// function ToDoItem(props) {
//     let todoItem = props.todoItem
//     console.log(todoItem)
//     return (
//         <div className="todo-item">
//             <input type="checkbox" checked={todoItem.completed}/>
//             <p>{todoItem.text}</p>
//         </div>
//     )
// }

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let todoItem = this.props.todoItem;
    this.state = {
      todoItem: this.props.todoItem,
    };
    let count=0
    setInterval(() => {
        
      this.state.todoItem = {
        text: "ZZZ"+count++,
        completed: true,
      }
      console.log(this.state.todoItem)
    }, 1000);

    console.log(todoItem);
    return (
      <div className="todo-item">
        <input type="checkbox" checked={this.state.todoItem.completed} />
        <p>{this.state.todoItem.text}</p>
      </div>
    );
  }
}

export default TodoItem;
