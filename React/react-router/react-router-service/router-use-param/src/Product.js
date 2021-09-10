import React from 'react'
import { useParams } from "react-router";
import productsData from './productsData';

function Product(){
    const {productId} = useParams()
    const productDetail = productsData.find(product=>product.id===parseInt(productId))
    console.log(productDetail)
    console.log(productId)
    return (<div>
        <h1>{productDetail.name}</h1>
        <p>{productDetail.id}</p>
        <h2>{productDetail.price}</h2>
        <span>{productDetail.description}</span>

    </div>)
}
export default Product