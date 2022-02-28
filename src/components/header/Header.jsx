import React from "react";
import "./Header.css";
import logo from "../../assets/logo2.png";
import Button from "rsuite/Button";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>shop</span>
      </div>
      <div className="links">
        <ul className="tabs">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/create">Create Products</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="auth">
        <Button appearance="ghost">
          Login | <AiOutlineLogin />
        </Button>
        &nbsp;
        &nbsp;
        &nbsp;
        <span className="cart-icon">
          <MdOutlineAddShoppingCart className="cart"/>
        </span>
      </div>
    </div>
  );
};

export default Header;
