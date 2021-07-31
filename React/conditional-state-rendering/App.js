import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.
class App extends React.Component {
    constructor(){
        super()
        this.state = {
            isLoggedIn : false
        }
    }
    render(){
        let inStyle = {
            display: this.state.isLoggedIn ? "in-line" : "none"
            
        }
        let outStyle = {
              display: !this.state.isLoggedIn ? "in-line" : "none"
        }
        
          return (
        <div>
            <h1>You are currently logged (<span style={inStyle}>in</span><span style= {outStyle}>out</span>)</h1>
        </div>
    )
        
    }
}


export default App
