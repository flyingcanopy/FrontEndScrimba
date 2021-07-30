import React from 'react'
import Joke from './Joke';

// One LAST time in this course, set up a React app from scratch
// Render an <App /> component
  // App should be in its own file
// App should render 5 <Joke /> components
  // Each Joke should receive a "question" prop and a "punchLine" prop
  // and render those however you'd like
  
// EXTRA CREDIT:
// Some jokes are only a punch line with no question:
  // E.g.: "It’s hard to explain puns to kleptomaniacs because they always take things literally."
// If you don't pass in a "question" prop, how might you make it only show the punchline instead?
// Spend time practicing the style of your Joke component
function App() {
  let jokes = []
  for(let count=1;count<=5;count++){
    let questionString = 'Question'+count
    let punchlineString = 'punchline'+count
    jokes.push(<Joke question={questionString} punchline = {punchlineString}/>)
  }
  jokes.push(<Joke  punchline = {"punchline 6"}/>)
  jokes.push(<Joke  question = {"question 7"}/>)
  return (
    jokes
  );
}

export default App;

