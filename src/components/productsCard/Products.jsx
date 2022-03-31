import React from "react";
import "./Products.css";
import { Rate } from "rsuite";
import { Link } from "react-router-dom";
import { Badge } from "rsuite";

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
  id,
}) => {
  return (
    <div className="products-card">
      <Link to={`/products/${id}`}>
        <Badge content={rating}>
          <img src={image} alt="product" />
        </Badge>
        <h4>{title.substring(0, 10)}</h4>
      </Link>
      <h5 className="brand">Brand: {brand}</h5>
      <span>Category: {category}</span>
      <h6 className="price">Price: $ {price}</h6>
      <Rate value={Math.trunc(rating)} allowHalf />
      <span>Available: {stock}</span>
      <p>Description: {description.substring(0, 150)}...</p>
    </div>
  );
};

export default Products;
