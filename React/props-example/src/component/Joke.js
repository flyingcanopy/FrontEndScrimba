import React from "react";

function Joke(props) {
  console.log(props);
  if (props.question && props.punchline) {
    return (
      <div>
        <h1> Question:{props.question}</h1>

        <h2> Answer: {props.punchline}</h2>
        <hr/>
      </div>
    );
  }else if(props.question){
      return  (
        <div>
          <h1> Question: {props.question}</h1>
          <hr/>
        </div>
      );
  }else if(props.punchline){
      return  (
        <div>  
          <h2> Answer: {props.punchline}</h2>
          <hr/>
        </div>
      );
  }else{
      return (<div></div>)
  }
}

export default Joke;
