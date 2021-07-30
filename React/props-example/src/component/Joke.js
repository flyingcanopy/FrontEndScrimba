import React from 'react'

function Joke(props){
    console.log(props)
    return (
        <div>
            <h1> {props.joke.question}</h1>
            <h2> {props.joke.punchline}</h2>
        </div>


    )
}

export default Joke