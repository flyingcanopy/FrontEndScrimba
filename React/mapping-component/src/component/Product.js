import React from 'react'



// id: "1",
// name: "Pencil",
// price: 1,
// description: "Perfect for those who can't remember things! 5/5 Highly recommend."
function Product(props){
    let product = props.product
    return (<div>
        <h1>Product Details</h1>
        <h2>{product.id}</h2>
        <h2>{product.name}</h2>
        <h2>{product.price}</h2>
        <h2>{product.description}</h2>
        <hr/>
    </div>)
}

export default Product