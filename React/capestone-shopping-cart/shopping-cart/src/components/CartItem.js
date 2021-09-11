import React, { useState } from "react"
import { Context } from "./ContextProvider"
import { useContext } from "react"
function CartItem({item}) {
    const {removeImage} = useContext(Context)
    const [onMouseOver,setOnMouseOver] = useState(false)
    return (
        <div className="cart-item">
        <i onMouseOut={()=>{
            setOnMouseOver(false)

        }} onMouseOver={()=>{
            setOnMouseOver(true)

        }} onClick={()=>{
            removeImage(item.id)

        }} className={onMouseOver?"ri-delete-bin-fill":"ri-delete-bin-line"}></i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
    </div>
    )
}

export default CartItem