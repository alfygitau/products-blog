import React from "react";
import "./Header.css";
import logo from "../../assets/logo3.png";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { Avatar } from "rsuite";
import { logout } from "../../redux/userRedux";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();
  const user = useSelector((state) => state.login.user);
  console.log(user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    toast.success("user logged out")
  };

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
      {user ? (
        <div className="authenticated">
          <Avatar size="md" circle src={user.image} alt="@SevenOutman" />
          <Link to="/profile">
            <span>{user.username}</span>
          </Link>
          <button className="btn btn-outline-dark" onClick={handleLogout}>
            Logout
          </button>
          <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <MdOutlineAddShoppingCart className="cart" />
              </Badge>
            </Link>
        </div>
      ) : (
        <div className="auth">
          <button
            className="btn btn-outline-primary"
            onClick={() => navigate("/login")}
          >
            Login | <AiOutlineLogin />
          </button>
          &nbsp; &nbsp; &nbsp;
          <span className="cart-icon">
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <MdOutlineAddShoppingCart className="cart" />
              </Badge>
            </Link>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
