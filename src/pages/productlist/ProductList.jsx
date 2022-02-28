import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../../components/productsCard/Products";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    await axios.get("http://localhost:8000/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="productlist">
      {products.map((product) => (
        <Products
          key={product.id}
          title={product.title}
          category={product.category}
          description={product.description}
          price={product.price}
          stock={product.stock}
          image={product.thumbnail}
          brand={product.brand}
          discount={product.discountPercentage}
        />
      ))}
    </div>
  );
};

export default ProductList;
