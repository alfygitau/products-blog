import React from "react";
import './Products.css'

const Products = ({title, category, description, stock, discount, price, image, brand}) => {
  return (
    <div className="products-card">
      <img src={image} alt="product" />
      <h4>{title}</h4>
      <h5>{brand}</h5>
      <span>{category}</span>
      <h6>$ {price}</h6>
      <span>Available: {stock}</span>
      <p>Description: {description}</p>
    </div>
  );
};

export default Products;
