import React from "react";
import { Link, Switch, BrowserRouter as Router } from "react-router-dom";
function About() {
  return (
    <div>
      <h1>Hey im back</h1>
    </div>
  );
}
function App() {
  const styleObj = {
    display: "flex",
    "flex-direction": "row",
    "justify-content": "space-between",
  };
  return (
    <div>
      <nav>
        <ul style={styleObj}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Router path="/contact">
        <div>
            <h1> Contact</h1>
          </div>
        </Router>
        <Router path="/About">
          <div>
            <h1> About</h1>
          </div>
        </Router>
        <Router path="/">
         <div>
            <h1> Home </h1>
          </div>
        </Router>
      </Switch>
    </div>
  );
}

export default App;
