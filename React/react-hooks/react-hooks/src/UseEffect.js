import React, {useState, useEffect} from "react"


function UseEffect() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    const colors = ["red","blue","orange"]
    //[] will only run once.. acts like componentDidMount
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])
    
    //runs everytime count changes 
    useEffect(() => {
        setColor(colors[Math.floor(Math.random() * 3 )]) 
    }, [count])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    )
}

export default UseEffect
