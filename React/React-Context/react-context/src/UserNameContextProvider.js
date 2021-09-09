import { React,Component } from "react";
import userNameContext from "./userNameContext";
import Welcome from "./Welcome";

const {Provider,Consumer} = userNameContext
class UserNameContextProvider extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            callback : this.changeUserName
        }

    }
    changeUserName = (username)=>{
        this.setState((prevState)=>{
            return {
                username:username
            }
        })
        console.log(this.state)

    }
    render(){
        return (
            <Provider value={this.state} >
                {this.props.children}
            </Provider>

        )

    }
}
export { UserNameContextProvider , Consumer as UserNameContextConsumer }