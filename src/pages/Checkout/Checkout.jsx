import React from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import Paypal from "../../other files/Paypal";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.quantity);
  const total = useSelector((state) => state.cart.total);
  console.log("cart", cart);
  return (
    <>
      <div className="checkout-container my-3">
        <main>
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your Bag</span>
                <span className="badge bg-primary rounded-pill">
                  {quantity}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {cart.map((product) => (
                  <li
                    className="list-group-item d-flex justify-content-between lh-sm"
                    key={product.id}
                  >
                    <div>
                      <h6 className="my-0">{product.title}</h6>
                      <small className="text-muted">
                        {product.description.substring(0, 100)}
                      </small>
                    </div>
                    <span className="text-muted">
                      {product.price * product.cartQuantity}
                    </span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$ {total}</strong>
                </li>
              </ul>
              <div className="card p-2">
                <Paypal />
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <hr className="my-4" />
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter your firt name"
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="Enter your last name"
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Enter your username"
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid username is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      value=""
                      required
                    />
                    <div className="invalid-feedback">
                      Valid email is required.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select className="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                  />
                  <label className="form-check-label" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Checkout;
