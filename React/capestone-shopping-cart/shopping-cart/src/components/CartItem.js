import React from "react"
import { Context } from "./ContextProvider"
import { useContext } from "react"
function CartItem({item}) {
    const {removeImage} = useContext(Context)
    return (
        <div className="cart-item">
        <i onClick={()=>{
            removeImage(item.id)

        }}className="ri-delete-bin-line"></i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
    </div>
    )
}

export default CartItem