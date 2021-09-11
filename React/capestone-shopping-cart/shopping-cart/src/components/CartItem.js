import React from "react"
import { Context } from "./ContextProvider"
import { useContext } from "react"
import useHover from "../hooks/useHover"
function CartItem({item}) {
    const {removeImage} = useContext(Context)
    const [hovered,ref] = useHover()
    return (
        <div className="cart-item">
        <i ref ={ref} onClick={()=>{
            removeImage(item.id)

        }} className={hovered?"ri-delete-bin-fill":"ri-delete-bin-line"}></i>
        <img src={item.url} width="130px" />
        <p>$5.99</p>
    </div>
    )
}

export default CartItem