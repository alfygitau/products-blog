import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-primary fw-bold mb-4">About Us</h3>
          <p className="lead mb-4">
            The pain itself is important to the main adipisicing elite. But the
            error to which he may seek the distinction of those who accuse him
            is bound to obtain, or by the labor of the blessed one, to receive
            the pleasure which was born of him. We can trim that option in time.
            By reason, there was no pleasure in rejecting them at the time, and
            from that, it was wiser than those of these accusers to be greater
            than that? The seasons, and most of all, are more labor
            responsibilities than those. The desire for snacks is not less than
            choices. We think that it will never be an awful mistake to obtain
            something similar! For from time to time, we draw upon the words of
            their minds, the troubles which one is bound to and the pain which
            the very worthy of rejecting toils may not be the result of.
          </p>
          <NavLink to="/contact" className="btn btn-outline-primary px-3">
            Contact Us
          </NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={about} alt="about" height="400px" width="400px" />
        </div>
      </div>
    </div>
  );
};

export default About;
