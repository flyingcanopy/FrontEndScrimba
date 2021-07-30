import React from "react"
import ReactDOM from "react-dom"

// The JSX
ReactDOM.render(<div><h1>Hello world! This is my first react program</h1><p>This is a paragraph</p></div>, document.getElementById("root"))

// The old way 
var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph."
