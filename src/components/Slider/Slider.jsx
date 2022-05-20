import React from "react";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src="https://images.pexels.com/photos/40185/mac-freelancer-macintosh-macbook-40185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              height="450px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ color: "black" }}>Modern Smartphones</h4>
              <h6 style={{ color: "black" }}>
                Talk of elegance from the Galaxy with Samsung
              </h6>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/products")}
                style={{ color: "black" }}
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              height="450px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ color: "black" }}>Entertainment is on</h4>
              <h6 style={{ color: "black" }}>
                Thoughtfully designed tech for stream, play and games
              </h6>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/products")}
                style={{ color: "black" }}
              >
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/4109755/pexels-photo-4109755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="..."
              height="450px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ color: "black" }}>Wheel in the fun </h4>
              <h6 style={{ color: "black" }}>
                Explore with the best ride. Best-selling in sports and
                outdoor
              </h6>
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/products")}
                style={{ color: "black" }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
