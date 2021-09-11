import React from "react"
import {Link} from 'react-router-dom'
import { Context } from "./ContextProvider"
import { useContext } from "react"
function Header() {
    const {cartItems} = useContext(Context)
    return (
        <header>
            <Link to="/"><h2>Pic Some</h2></Link>
            { cartItems.length > 0 && <Link to="/cart"><i className="ri-shopping-cart-fill ri-fw ri-2x"></i></Link> }
            { !cartItems.length && <Link to="/cart"><i className="ri-shopping-cart-line ri-fw ri-2x"></i></Link> }
        </header>
    )
}

export default Header
