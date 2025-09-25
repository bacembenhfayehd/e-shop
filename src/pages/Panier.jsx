import React from 'react'

function Panier({panier}) {
  return (
    <div>
      <h1> Panier 🛒 </h1>
      {panier.length === 0 ? (
        <p>Aucun produit dans le panier</p>
      ): (
        panier.map((item,index) => <p key={index}>{item.name}</p>)
      )}
    </div>
  )
}

export default Panier