import React from "react";
import products from "./ProductsPage";
import ProductsPage from "./ProductsPage";

const HomePage = () => {
  return (
    <div>
      {products.map((product) => (
        <ProductsPage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
