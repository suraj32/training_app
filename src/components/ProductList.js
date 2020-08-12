import React from "react";
import products from "../productList";
import ProductCard from "./ProductCard";

const productList = () => {
  return (
    <div className="col-4">
      {products.map(product => <ProductCard product={product}/>)}
    </div>
  );
};

export default productList;
