import React from "react";
import contact from "../../assets/Contact.png";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h3>Have some questions for us?</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md 5 d-flex justify-content-center">
          <img src={contact} alt="contact us" height="300px" width="300px" />
        </div>
        <div className="col-md-6">
          <form>
            <div class="mb-3">
              <label for="exampleForm" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleForm"
                placeholder="John Smith"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-outline-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
