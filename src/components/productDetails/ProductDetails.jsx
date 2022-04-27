import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartRedux";
import "./ProductDetails.css";
import Products from "../productsCard/Products";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    const fetchCategory = async (category) => {
      category = product.category;
      console.log(category);
      const response = await axios.get(
        `https://dummyjson.com/products/category/${category}`
      );
      setCategory(response.data.products);
    };
    fetchCategory();
  }, [product]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product }));
  };

  return (
    <>
      <div className="product-details">
        <div className="product-image">
          <img src={product.thumbnail} alt="product" />
        </div>
        <div className="description">
          <h4>{product.title}</h4>
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
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => navigate("/products")}
            style={{ marginLeft: "10px" }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
      <div className="details-title">
        <h4>Reviews</h4>
        <h5>User Review</h5>
        <h4 style={{ textAlign: "left", color: "rgb(204,46,67)" }}>
          Other related products
        </h4>
      </div>
      <div className="related">
        {category?.map((item) => (
          <Products
            key={item.key}
            title={item.title}
            description={item.description}
            brand={item.brand}
            image={item.thumbnail}
            category={item.category}
            price={item.price}
            id={item.id}
            rating={item.rating}
            stock={item.stock}
          />
        ))}
      </div>
    </>
  );
};

export default ProductDetails;
