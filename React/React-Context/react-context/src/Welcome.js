import {React,Component} from "react"
import { UserNameContextConsumer } from "./UserNameContextProvider";


class Welcome extends Component{
      render(){
          console.log("welcome")
        return (

        <div>
            <UserNameContextConsumer>
                {(state)=>{
                    console.log(state)
                    return (<h1> Welcome , {state.username}</h1>)
                }}

            </UserNameContextConsumer>
        </div>)
    }

}

export default Welcome
