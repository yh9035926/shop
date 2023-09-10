import React from "react";

export const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 20.99,
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 30.49,
  },
];

const ProductsPage = () => {
  return (
    <div>
      <h3>{products.name}</h3>
      <p>{products.description}</p>
      <p>Price: ${products.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductsPage;
