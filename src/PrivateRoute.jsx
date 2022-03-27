import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
const user = useSelector((state)=>state.login.user)

  // If authorized, return a component that will render child elements
  // If not, return element that will navigate to login page
  return user ? <Component /> : <Navigate to="/login" />;
}
