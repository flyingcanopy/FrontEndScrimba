import { React, Component } from "react";
import { UserNameContextConsumer } from "./UserNameContextProvider";
import Welcome from "./Welcome";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
    

  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  
    
  }
  /**
 * Challenge: Add the ability for the user to choose a new username
 * 
 * 1. Add state to this component to hold the new username in a controlled form
 * (https://reactjs.org/docs/forms.html#controlled-components)
 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
 * 
 * 2. Change userContext into a component that has state and provides the ability
 * to change the user's username. Make sure to export the provider and consumer
 * as named exports and update their uses anywhere else in the app
 * 
 * 3. Give this App component the ability to update the username in context when the
 * button is clicked
*/
 
  render() {
    return (
      <div>
      <Welcome/>
      <UserNameContextConsumer>
        {(state) => {
          return (
            <div>
              <input
                type="text"
                name="username"
                placeholder="New username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <button onClick={()=>{
                state.callback(this.state.username)

              }}>Change Username</button>
            </div>
          );
        }}
      </UserNameContextConsumer>
      </div>
    );
  }
}

export default App;
