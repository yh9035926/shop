import React from "react";

import ProductsPage from "./ProductsPage";

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: "가방",
      description: "상세 설명입니다",
      price: 20.99,
    },
    {
      id: 2,
      name: "바지",
      description: "상세 설명입니다",
      price: 30.49,
    },
  ];
  return (
    <div>
      <div>쇼핑몰</div>
      {products.map((product) => (
        <ProductsPage key={product.id} product={product} />
      ))}
    </div>
  );
};

export default HomePage;
