import React from "react"

function TodoItem(props) {
    let paragraphStyle = {
        textDecoration: props.item.completed ?  'line-through blue' : 'none' 
    }
    console.log(props.method)

  
    return (
       
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={()=>{
                    props.method(props.item.id)
                }}
            />
            <p style={paragraphStyle}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem