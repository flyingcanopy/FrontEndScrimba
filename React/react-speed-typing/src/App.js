import React, {useState, useEffect, useRef} from "react"
import useStateOfGame from "./useStateOfGame"

/**
 * Challenge:
 * 
 * Make the input box focus (DOM elements have a method called .focus()) 
 * immediately when the game starts
 */

function App() {
   
    const textAreaRef = useRef(null)    
    const [isTimeRunning,timeRemaining,wordCount,text,handleChange,startGame]  = useStateOfGame(textAreaRef)
    
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea ref={textAreaRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
