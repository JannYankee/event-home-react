import React, { useEffect, useState } from "react";
import ProductCard from "./Components/ProductCards.jsx";
import AddProductForm from "./Components/AddProductForm.jsx";
import "./allDesign.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddProduct = (product) => {
    setProducts((prev) => [product, ...prev]);
  };

  return (
    <div>
      <AddProductForm onAdd={handleAddProduct} />
      <div className="product-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default App;
