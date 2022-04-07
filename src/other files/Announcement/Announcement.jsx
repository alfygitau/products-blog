import React from "react";
import { NavLink } from "react-router-dom";
import './Announcement.css'

const Announcement = () => {
  const title = "sell faster, buy smarter everyday!";
  return (
    <div className="announcement">
      <div className="announce-label">
        <h5>{title.toUpperCase()}</h5>
      </div>
      <div className="announce-links">
        <NavLink to='/'>Track Order</NavLink>
        <NavLink to='/'>Help Center</NavLink>
      </div>
    </div>
  );
};

export default Announcement;
