import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{display:'flex' , gap:'1rem', padding:'1rem' , background:'#eee'}}>
        <Link to='/'>Home</Link>
        <Link to='/products'>Products</Link>
        <Link to='/panier'>Panier</Link>
    </div>
  )
}

export default Navbar