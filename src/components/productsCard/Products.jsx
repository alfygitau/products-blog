import React from "react";
import "./Products.css";
import { Rate } from "rsuite";
import { Link } from "react-router-dom";

const Products = ({
  title,
  category,
  description,
  stock,
  discount,
  price,
  image,
  brand,
  rating,
  id
}) => {
  return (
    <div className="products-card">
      <img src={image} alt="product" />
      <Link to={`/products/${id}`}>
        <h4>{title}</h4>
      </Link>
      <h5>Brand: {brand}</h5>
      <span>Category: {category}</span>
      <h6>Price: $ {price}</h6>
      <Rate value={Math.trunc(rating)} allowHalf />
      <span>Available: {stock}</span>
      <p>Description: {description}</p>
    </div>
  );
};

export default Products;
