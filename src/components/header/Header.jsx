import React from "react";
import "./Header.css";
import logo from "../../assets/logo3.png";
import { AiOutlineLogin } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { Avatar, Dropdown } from "rsuite";
import { logout } from "../../redux/userRedux";
import { toast } from "react-toastify";
import Announcement from "../../other files/Announcement/Announcement";
import {
  ChatBubbleOutline,
  Discount,
  FavoriteBorder,
  LocalMallOutlined,
  Login,
  ManageAccounts,
  PersonAddAlt,
  SettingsOutlined,
  ShoppingBasket,
} from "@mui/icons-material";

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
    toast.success("user logged out");
  };

  return (
    <>
      <Announcement />
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div className="logo">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" />
            </Link>
            <span>shop</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="links">
              {tabs.map((tab, index) => (
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" key={index}>
                  <li className="nav-item">
                    <NavLink to={tab.path}>{tab.tabname.toUpperCase()}</NavLink>
                  </li>
                </ul>
              ))}
            </div>
            {user ? (
              <div className="authenticated">
                <Dropdown
                  title={user.username.toUpperCase()}
                  icon={<PersonAddAlt />}
                  trigger={["click", "hover"]}
                >
                  <Dropdown.Item>
                    <ShoppingBasket /> &nbsp; Orders
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("/profile")}>
                    <ManageAccounts /> &nbsp; Profile
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <SettingsOutlined /> &nbsp; Settings
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Discount /> &nbsp; Coupons/discounts
                  </Dropdown.Item>
                </Dropdown>{" "}
                &nbsp;&nbsp;
                <button
                  className="btn btn-outline-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <Link to="/cart">
                  <Badge badgeContent={quantity} color="success">
                    <LocalMallOutlined fontSize="large" />
                  </Badge>
                </Link>
              </div>
            ) : (
              <div className="auth">
                <Dropdown
                  title="My Account"
                  icon={<PersonAddAlt />}
                  trigger={["click", "hover"]}
                >
                  <Dropdown.Item>
                    <ShoppingBasket /> &nbsp; Order
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FavoriteBorder /> &nbsp; Favourites
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <ChatBubbleOutline /> &nbsp; Messages
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Discount /> &nbsp; Coupons/discounts
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item onClick={() => navigate("/login")}>
                    <Login /> &nbsp; Login
                  </Dropdown.Item>
                </Dropdown>
                &nbsp; &nbsp; &nbsp;
                <span className="cart-icon">
                  <Link to="/cart">
                    <Badge badgeContent={quantity} color="success">
                      <LocalMallOutlined fontSize="large" />
                    </Badge>
                  </Link>
                </span>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
