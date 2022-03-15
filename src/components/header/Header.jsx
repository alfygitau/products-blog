import React from "react";
import "./Header.css";
import logo from "../../assets/logo2.png";
import Button from "rsuite/Button";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "@mui/material";

const Header = () => {
  const tabs = [
    { tabname: "Home", path: "/" },
    { tabname: "Products", path: "/products" },
    { tabname: "Create Products", path: "/create" },
    { tabname: "Contact", path: "/contact" },
  ];

  const quantity = useSelector((state) => state.cart.quantity);
  console.log("quantity", quantity);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>shop</span>
      </div>
      <div className="links">
        {tabs.map((tab, index) => (
          <ul className="tabs" key={index}>
            <li>
              <a href={tab.path}>{tab.tabname}</a>
            </li>
          </ul>
        ))}
      </div>
      <div className="auth">
        <Button appearance="ghost" className="auth-button">
          Login | <AiOutlineLogin />
        </Button>
        &nbsp; &nbsp; &nbsp;
        <span className="cart-icon">
          <a href="/cart">
            <MdOutlineAddShoppingCart className="cart" />
          </a>
          <span className="badge bg-primary">{quantity}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
