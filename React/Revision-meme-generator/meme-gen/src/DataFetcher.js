import React, { Component } from "react"
class DataFetcher extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText:"",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes').then((res)=>res.json()).then((response)=>{
            console.log(response.data.memes)
            this.setState((prevState)=>{
                return {
                    ...prevState,
                    allMemeImgs:response.data.memes
                }
            })
        })
    }
    handleChange(event) {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }
      /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */
       generateRandomNumber(max){
           // lets say max is 5 .. 5 * 0.999 < 5 .. 0 - 4 ..  5 * 0.1 => 0.5 .. 5 *  0.5 
           return Math.floor(Math.random()*max)
        }

    render(){
    
       
        return (
            <div>
            <form className="meme-form">
            <input 
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
            /> 
            <input 
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
            /> 
        
            <button onClick={(event)=>{
                event.preventDefault();
                console.log("clicked")
                const randomImageIndex = this.generateRandomNumber(this.state.allMemeImgs.length)
                console.log(this.state.allMemeImgs)
                console.log(this.state.allMemeImgs[randomImageIndex]["url"])
                this.setState((prevState)=>{
                    console.log(randomImageIndex)
                    return (
                        {
                        ...prevState,
                        randomImg: prevState.allMemeImgs[randomImageIndex]["url"]
                        }
                    )
                })
            }}>Gen</button>
        </form>
        <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
        </div>
        )

    }
}


export default DataFetcher