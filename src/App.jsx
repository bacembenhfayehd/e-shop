import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Panier from "./pages/Panier";

function App() {
  const [panier, setPanier] = useState([]);

  const addToCart = (product) => {
    setPanier([...panier, product]);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/panier" element={<Panier panier={panier} />} />
      </Routes>
    </div>
  );
}

export default App;
