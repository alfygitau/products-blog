import React from "react";
import "./Header.css";
import logo from "../../assets/logo2.png";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const tabs = [
    { tabname: "Home", path: "/" },
    { tabname: "Products", path: "/products" },
    { tabname: "Create Products", path: "/create" },
    { tabname: "Contact", path: "/contact" },
    { tabname: "About", path: "/about" },
  ];

  const quantity = useSelector((state) => state.cart.quantity);
  console.log("quantity", quantity);

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
        <span>shop</span>
      </div>
      <div className="links">
        {tabs.map((tab, index) => (
          <ul className="tabs" key={index}>
            <li>
              <NavLink to={tab.path}>{tab.tabname}</NavLink>
            </li>
          </ul>
        ))}
      </div>
      <div className="auth">
        <button className="btn btn-outline-primary">Login | <AiOutlineLogin /></button>
        &nbsp; &nbsp; &nbsp;
        <span className="cart-icon">
          <a href="/cart">
            <MdOutlineAddShoppingCart className="cart" />
          </a>
          <span className="badge bg-danger">{quantity}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
