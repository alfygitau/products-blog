import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="guide">
          <h4>Shopping Guide</h4>
          <p>How to register</p>
          <p>How to download SkyShop App</p>
          <p>Forgot Password</p>
        </div>
        <div className="help">
          <h4>Help Center</h4>
          <p>SkyShop Privacy Policy</p>
          <p>After Sale Policy</p>
          <p>How do i pay on SkyShop</p>
          <p>Account Settings</p>
          <p>FAQ center</p>
        </div>
        <div className="business">
          <h4>Business</h4>
          <p>Want to be a seller</p>
          <p>Seller Center</p>
          <p>SkyShop</p>
        </div>
        <div className="intern">
          <h4>SkyShop International</h4>
          <p>Contact us</p>
          <p>Uganda</p>
          <p>Tanzania</p>
        </div>
        <div className="connect">
          <h4>Stay Connected</h4>
          <span>
            <FacebookOutlinedIcon />
          </span>
          <span>
            <LinkedIn />
          </span>
          <span>
            <Twitter />
          </span>
          <span>
            <Instagram />
          </span>
          <p>Get Shopping App and Earn Millions of Cash Rewards</p>
          <p>Forgot Password</p>
        </div>
      </div>
      <div className="footer">
        <h5>Products Blog || Copyright@2022</h5>
      </div>
    </div>
  );
};

export default Footer;
