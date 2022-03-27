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
            <div className="mb-3">
              <label htmlFor="exampleForm" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleForm"
                placeholder="John Smith"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter your message/question"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
