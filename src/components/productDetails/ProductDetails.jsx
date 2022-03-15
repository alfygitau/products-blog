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
      <img src={product.thumbnail} alt="product" />
      <h4>{product.title}</h4>
      <h5>{product.brand}</h5>
      <h5>$ {product.price}</h5>
      <h6>{product.category}</h6>
      <span>Available in Stock: {product.stock}</span>
      <span>{product.rating}</span>
      <p>{product.description}</p>
      <button
        type="button"
        onClick={handleAddToCart}
        className="btn btn-primary"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductDetails;
