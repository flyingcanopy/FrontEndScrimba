import React from "react";

function Joke(props) {
  console.log(props);
  
    const h1Style = {
        display: props.question ?  "block" : "none",
    }
    const h2Style = {
        display: props.punchLine ?  "block" : "none",
    }
    return (
      <div>
        <h1 style={h1Style}> Question:{props.question}</h1>

        <h2 style={h2Style}> Answer: {props.punchLine}</h2>
        <hr/>
      </div>
    );
  
}

export default Joke;
