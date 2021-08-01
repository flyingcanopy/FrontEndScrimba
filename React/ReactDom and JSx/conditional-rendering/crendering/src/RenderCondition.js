import React from "react";

class RenderCondition extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
    };
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        loggedIn: !prevState.loggedIn,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.loggedIn ? <h1>IN</h1> : <h1>out</h1>}
        <button onClick={this.handleClick}>
           {this.state.loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    );
  }
}

export default RenderCondition;
