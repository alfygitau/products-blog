import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
const [product, setProduct] = useState({})

  const param = useParams();
  const { id } = param;

const fetchProduct =async(id)=>{
    await axios.get(`http://localhost:8000/products/${id}`)
    .then(response=>{
        console.log(response.data);
        setProduct(response.data)
    })
}
useEffect(()=>{
    fetchProduct(id)
},[id])

  return <div className="product-details">
      <img src={product.thumbnail} alt="product" />
      <h4>{product.title}</h4>
      <h5>{product.brand}</h5>
      <h6>{product.category}</h6>
      <span>Available in Stock: {product.stock}</span>
      <span>{product.rating}</span>
      <p>{product.description}</p>

  </div>;
};

export default ProductDetails;
