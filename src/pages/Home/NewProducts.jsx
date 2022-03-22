import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../../components/productsCard/Products";
import "../Home/Homepage.css";

const NewProducts = () => {
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setNewProducts(response.data);
    };
    fetchNewProducts();
  }, []);
  console.log(newProducts);

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center", paddingBottom: "20px" }}>
          List of New Products
        </h3>
      </div>
      <div className="new-products">
        {newProducts.map((product) => (
          <Products
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            rating={product.rating.rate}
            description={product.description}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default NewProducts;
