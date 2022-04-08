import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div className="container py-2 my-3">
      <div className="row">
        <div className="col-md-6">
          <h3 className="text-primary fw-bold mb-4">About Us</h3>
          <p className="mb-4">
            Sky shop is Kenya's largest online shopping mall. It was launched in
            July 2014 with the mission of becoming No.1 E-commerce platform in
            Africa, and has sites strategically distributed in the three
            countries namely: Kenya, Uganda and Nigeria. Sky shop serves a
            retail-customer base that continues to grow exponentially, offering
            products that span various categories including Electronics such as
            smart phones, laptops, subwoofer etc, Clothing, Home Appliances,
            Fashion bag, Baby Products, makeup and much more. Sky shop continues
            to expand the mall, with the scope of offerings that will increase
            in variety, simplicity and convenience. The range of services are
            designed to ensure optimum levels of convenience and customer
            satisfaction with the retail process; order delivery-tracking,
            dedicated customer service support and many other premium services.
            The company is highly customer-centric and are committed towards
            finding innovative ways of improving the customers' shopping
            experience. Now, shopping with Sky shop App will bring you millions
            of cash rewards, best customer services, and track your order at
            anytime. Download Sky shop App APK and enjoy best service online in
            Kenya.
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
