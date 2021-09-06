import {React,Component} from "react"
import UserNameContextConsumer from "./UserNameContextConsumer"


class Welcome extends Component{
      render(){
        return (

        <div>
            <UserNameContextConsumer>
                {(userName)=>{
                    return (<h1> Welcome , {userName}</h1>)
                }}

            </UserNameContextConsumer>
        </div>)
    }

}

export default Welcome
