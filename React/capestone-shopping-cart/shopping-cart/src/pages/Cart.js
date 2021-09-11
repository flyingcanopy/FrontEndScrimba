import React, { useState } from "react"
import { useContext } from "react"
import { Context } from "../components/ContextProvider"
import CartItem from "../components/CartItem"
function Cart() {
    const [orderPlaced,setOrderPlaced] = useState(false)
    const {cartItems,clearCart} = useContext(Context)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    const price = 5.99
    const totalPrice = 5.99 * (cartItemElements.length)
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:{totalPrice.toLocaleString("en-US", {style: "currency", currency: "INR"})} </p>
            <div className="order-button">
                <button onClick={()=>{
                    setOrderPlaced(true)
                    setTimeout(()=>{
                        console.log("order placed")
                        setOrderPlaced(false)
                        clearCart()
                    },3000)

                }}>{!orderPlaced&&"Place Order"}{orderPlaced&&"Loading..."}</button>
            </div>
        </main>
    )
}

export default Cart