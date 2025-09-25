import React from 'react'

function ProductCard({product,addToCart}) {
  return (
    <div style={{border:"1px solid #ccc" , padding:"1rem" , margin:"1rem"}}>
        <h3>{product.name}</h3>
        <p>Price : {product.price}</p>
        <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard