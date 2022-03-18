import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../../components/productsCard/Products";
import "../Home/Homepage.css";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=10&skip=10"
      );
      setFeaturedProducts(response.data.products);
    };
    fetchFeaturedProducts();
  }, []);

  return (
    <>
      <h4 style={{ paddingBottom: "20px", textAlign: "center" }}>
        List of featured Products
      </h4>
      <div className="featured">
        {featuredProducts.map((product) => (
          <div className="featured-container" key={product.id}>
            <Products
              brand={product.brand}
              price={product.price}
              category={product.category}
              title={product.title}
              image={product.thumbnail}
              rating={product.rating}
              stock={product.stock}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
