import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {  firstName:"",
                        lastName:"",
                        age:"",
                        gender:"",
                        location:"",
                        milk:"",
                        meat:"",
                        }
        this.onHandle = this.onHandle.bind(this)
    }
    onHandle(event){
        
        let {name, value} = event.target
        if(event.target.type==='checkbox')
            value = event.target.checked
        console.log(name+" "+value)
        this.setState((prevState)=>{
            const newState = {
                ...prevState,
                [name] : [value]
            }
            console.log(newState+"new state")
            return newState
        })
        
        
        
    }
    render() {
        console.log("state"+this.state)
        return (
            <main>
                <form>
                    <input  onChange={this.onHandle} name="firstName" placeholder="First Name" value={this.state.firstName}/><br />
                    <input  onChange={this.onHandle} name="lastName" placeholder="Last Name" value={this.state.lastName} /><br />
                    <input  onChange={this.onHandle} name="age" placeholder="Age" value={this.state.age}/><br />
                    
                    {/* Create radio buttons for gender here */}
                    <label>
                    <input onChange={this.onHandle} type="radio"  name="gender" value="male"/>
                    Male
                    </label>
                    <label>
                    <input onChange={this.onHandle} type="radio"  name="gender" value="female"/>
                     Female
                    </label>
                    <br />
                    
                    {/* Create select box for location here */}
                    <select onChange={this.onHandle} name="location">
                    <option value="Italy">Italy</option>
                    <option value="France">France</option>
                    <option value="Germany">Germany</option>
                    <option value="Pakistan">Pakistan</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                     <label>
                        Milk
                        <input
                            name="milk"
                            type="checkbox"
                            checked={this.state.included}
                            onChange={this.onHandle} />
                     </label>
                     <label>
                        Meat
                        <input
                            name="meat"
                            type="checkbox"
                            checked={this.state.included}
                            onChange={this.onHandle} />
                     </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName+" "+this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>
                    Your dietary restrictions: 
                    {'Milk' +" "+ this.state.milk + ',Meat '+this.state.meat}
                </p>
            </main>
        )
    }
}

export default App
