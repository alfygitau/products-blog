import React from "react";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
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
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img
              src="https://thumbs.dreamstime.com/b/collection-modern-touchscreen-smartphones-creative-abstract-mobile-phone-wireless-communication-technology-mobility-44433245.jpg"
              class="d-block w-100"
              alt="..."
              height="450px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h4 style={{ color: "rgb(204, 46, 67)" }}>Modern Smartphones</h4>
              <h6 style={{ color: "rgb(204, 46, 67)" }}>
                Talk of elegance from the Galaxy with Samsung
              </h6>
              <button className="btn btn-outline-primary">Shop Now</button>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img
              src="https://cdn.vox-cdn.com/thumbor/FR4yhPw5P4SlR2HnNxcvcUlW9Nw=/0x953:4000x3047/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22423130/XPS_13_black_open_up_right.jpg"
              class="d-block w-100"
              alt="..."
              height="450px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h4 style={{ color: "rgb(204, 46, 67)" }}>Entertainment is on</h4>
              <h6 style={{ color: "rgb(204, 46, 67)" }}>
                Thoughtfully designed tech for stream, play and games
              </h6>
              <button className="btn btn-outline-primary">Shop Now</button>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://wallpaperaccess.com/full/334930.jpg"
              class="d-block w-100"
              alt="..."
              height="450px"
            />
            <div class="carousel-caption d-none d-md-block">
              <h4 style={{ color: "rgb(204, 46, 67)" }}>Wheel in the fun </h4>
              <h6 style={{ color: "rgb(204, 46, 67)" }}>
                Explore with the hottest ride. Best-selling in sports and
                outdoor
              </h6>
              <button className="btn btn-outline-primary">Shop Now</button>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
