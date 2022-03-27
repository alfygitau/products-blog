import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <h4>Ooooops...something went wrong</h4>
      <button className="btn btn-outline-danger" onClick={() => navigate("/")}>
        Back to homepage
      </button>
    </div>
  );
};

export default NotFound;
