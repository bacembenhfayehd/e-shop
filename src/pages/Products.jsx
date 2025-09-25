import React from 'react'
import ProductCard from '../components/ProductCard'

function Products({addToCart}) {
  const products = [
    {id:1,name:"T-shirt Black" , price :20},
    {id:2,name:"T-shirt White" , price :120},
    {id:3,name:"T-shirt Blue" , price :50},
  ]
  return (
    <div>
      <h1>Our latest products</h1>
      <div>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>

    </div>
  )
}

export default Products