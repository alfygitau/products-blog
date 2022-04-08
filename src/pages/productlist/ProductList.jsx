import axios from "axios";
import React, { useEffect, useState } from "react";
import Chips from "../../components/chips/chips";
import Products from "../../components/productsCard/Products";
import Search from "../../components/searchBar/SearchBar";
import "./ProductList.css";
import Pagination from "@mui/material/Pagination";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);

  const url = `https://dummyjson.com/products?limit=${limit}&skip=0`;

  const handleChange = async (event, value) => {
    console.log("value", value);
    setLimit(value * 10);
    setPage(value);
  };
  console.log("pagination", limit);

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(limit ? url: "https://dummyjson.com/products?limit=10&skip=0" )
        .then((response) => {
          console.log("page", response.data.products);
          setProducts(response.data.products);
          setCount(response.data.total / 10);
        });
    };
    fetchProducts(url);
  }, [url]);

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
        setShow(false);
        setFilteredProducts(response.data.products);
      });
  };
  console.log("results", searchResults);

  return (
    <>
      <div className="category-chips">
        <Search searchProducts={searchProducts} />
        <h4>Categories</h4>
        <Chips handleClick={handleClick} />
      </div>
      <div className="pagination">
        <Pagination
          className="my-3"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
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
