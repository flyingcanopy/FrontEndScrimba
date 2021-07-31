import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    /**
     * this method is called only one time ... 
     * i.e when the render method is first called.
     */
    componentDidMount() {
        setTimeout(() => {
            // the setState function triggers the render method of the current APP
            this.setState({
                isLoading: false
            })
        }, 1500)
    }
    
    render() {
        console.log("rendering")
        return (
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default App
