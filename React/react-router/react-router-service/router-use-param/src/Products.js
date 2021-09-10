import React from "react"
import productsData from "./productsData"
import {Link}from 'react-router-dom'

/**
 * Challenge:
 * 
 * 1. Create a ProductDetail component
 * 2. Link each product name to a detail page of that product 
 *    under the route "/products/{insert product id here}" (e.g.: "/products/2")
 * 3. Clicking the product name should replace the product list page with
 *    the detail page of that component.
 * 
 * Hint: Check out the `useParams` lesson if you need a refresher.
 */

function Products() {    
    const products = productsData.map(prod => (
        <div key={prod.id}>
            <Link to={`/products/${prod.id}`}><h3>{prod.name}</h3></Link>
            <p>Price: ${prod.price}</p>
            <hr />
        </div>
    ))
    
    return (
        <>
            <h1>Products Page</h1>
            {products}
        </>
    )
}

export default Products