import axios from "axios";
import React, { useEffect, useState } from "react";
import Chips from "../../components/chips/chips";
import Products from "../../components/productsCard/Products";
import Search from "../../components/searchBar/SearchBar";
import "./ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [show, setShow] = useState(true);
  const [searchResults, setSearchResults] = useState([])

  const fetchProducts = async () => {
    await axios.get("http://localhost:8000/products").then((response) => {
      console.log(response.data);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleClick = async (category) => {
    console.info("You clicked the Chip", category);
    await axios
      .get(`https://dummyjson.com/products/category/${category}`)
      .then((response) => {
        console.log("categories", response.data.products);
        setShow(false);
        setFilteredProducts(response.data.products);
      });
  };

  const searchProducts = async (keyword) => {
    await axios
      .get(`https://dummyjson.com/products/search?q=${keyword}`)
      .then((response) => {
        console.log(response.data.products);
        setSearchResults(response.data.products);
        setShow(false)
        setFilteredProducts(response.data.products)
      });
  };
  useEffect(() => {
    searchProducts();
  }, []);

  console.log("results", searchResults);

  return (
    <>
      <div className="category-chips">
          <Search searchProducts={searchProducts}/>
        <Chips handleClick={handleClick} />
      </div>
      <div className="productlist">
        {show &&
          products.map((product) => (
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
              rating={product.rating}
              id={product.id}
            />
          ))}
        {!show &&
          filteredProducts.map((product) => (
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
              rating={product.rating}
              id={product.id}
            />
          ))}
      </div>
    </>
  );
};

export default ProductList;
