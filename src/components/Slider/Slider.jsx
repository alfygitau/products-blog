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
              src="https://image.kilimall.com/kenya/shop/store/goods/3007/2022/02/164516330907404f4dc09de0e4dea9ee24d3eebe45e18.jpg"
              className="d-block w-100"
              alt="..."
              height="450px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ color: "rgb(204, 46, 67)" }}>Modern Smartphones</h4>
              <h6 style={{ color: "rgb(204, 46, 67)" }}>
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
              src="https://cdn.vox-cdn.com/thumbor/FR4yhPw5P4SlR2HnNxcvcUlW9Nw=/0x953:4000x3047/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22423130/XPS_13_black_open_up_right.jpg"
              className="d-block w-100"
              alt="..."
              height="450px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ color: "rgb(204, 46, 67)" }}>Entertainment is on</h4>
              <h6 style={{ color: "rgb(204, 46, 67)" }}>
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
              src="https://ke.jumia.is/cms/external/pet/SO521EA0BSKP8NAFAMZ/5287016e59c55cd4e3490bc4f82898bc.jpg"
              className="d-block w-100"
              alt="..."
              height="450px"
            />
            <div className="carousel-caption d-none d-md-block">
              <h4 style={{ color: "rgb(204, 46, 67)" }}>Wheel in the fun </h4>
              <h6 style={{ color: "rgb(204, 46, 67)" }}>
                Explore with the hottest ride. Best-selling in sports and
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
