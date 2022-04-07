import React from "react";
import "./Homepage.css";
import { NavLink, Outlet } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { Breadcrumb } from "rsuite";

const Homepage = () => {
  return (
    <div className="container">
      <Slider />
      <div className="products-links">
        <NavLink to="new">New Products</NavLink>||&nbsp;
        <NavLink to="featured">Featured Products</NavLink>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Homepage;
