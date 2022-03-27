import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartRedux";
import "./ProductDetails.css";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();

  const param = useParams();
  const { id } = param;
  console.log("id", id);

  const fetchProduct = async (id) => {
    await axios
      .get(`https://dummyjson.com/products/${id}?limit=100&skip=0`)
      .then((response) => {
        console.log("details", response.data);
        setProduct(response.data);
      });
  };
  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product }));
  };

  return (
    <div className="product-details">
      <div className="product-image">
        <img src={product.thumbnail} alt="product" />
      </div>
      <div className="description">
      <h4>Title: {product.title}</h4>
      <h5>Brand: {product.brand}</h5>
      <h5>Price: $ {product.price}</h5>
      <h6>Category: {product.category}</h6>
      <span>Available in Stock: {product.stock}</span>
      <h6>Rating: {product.rating}</h6>
      <p>Description: {product.description}</p>
      <button
        type="button"
        onClick={handleAddToCart}
        className="btn btn-primary"
      >
        ADD TO CART
      </button>
      </div>
    </div>
  );
};

export default ProductDetails;
