import React, { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import "./chips.css";
import axios from "axios";

const Chips = ({handleClick}) => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    await axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        console.log(response.data);
        setCategories(response.data);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);


  return (
    <div className="chips">
      {categories.map((category, index) => (
        <Chip
          label={category}
          variant="outlined"
          onClick={() => handleClick(category)}
          key={index}
        />
      ))}
    </div>
  );
};

export default Chips;
