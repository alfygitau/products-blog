import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart, removeFromCart } from "../../redux/cartRedux";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.products);
  console.log("cartItems", cartItems);
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const cartTotal = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  return (
    <div className="cart-container">
      <h3 style={{ textAlign: "center" }}>My Shopping Bag</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">productId</th>
            <th scope="col">Image</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">brand</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        {cartItems?.map((item, index) => (
          <tbody key={index}>
            <tr>
              <th scope="row">{item.id}</th>
              <td>
                <img
                  className="thumbnail"
                  src={item.thumbnail}
                  alt="thumbnail"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.cartQuantity}</td>
              <td>$ {item.price}</td>
              <td>{item.brand}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleRemove(item)}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <h5>Other actions</h5>
      <button
        type="button"
        onClick={handleEmptyCart}
        className="btn btn-danger"
      >
        Empty Cart
      </button>
      <button
        type="button"
        className=" btn btn-outline-dark"
        style={{ marginLeft: "10px", padding: "7px", borderRadius: "10px" }}
        onClick={()=>navigate("/checkout")}
      >
        Proceed to checkout
      </button>
      <h5 style={{ paddingTop: "20px" }}>Quantity: {cartQuantity}</h5>
      <h4>Total: $ {cartTotal}</h4>
    </div>
  );
};

export default Cart;
