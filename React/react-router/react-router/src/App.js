import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Info from "./pages/profile/Info"
import Settings from "./pages/profile/Settings"
import {Switch, BrowserRouter as Router} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Router exact path="/">
                    <Home />
                </Router>
               
                <Router path="/profile/info">
                <Info/>

                </Router>
                <Router path="/profile/settings">
                 
                <Settings/>
                </Router>
                <Router exact path="/profile">
                    <Profile/>
                </Router>
            </Switch>
           
            
            <Footer />
        </div>
    )
}

export default App
