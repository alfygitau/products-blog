import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Paypal = () => {
  const total = useSelector((state) => state.cart.total);
  const user = useSelector((state) => state.login.user.firstName);
  const description = `${user}'s bag`;
  console.log(description);
  const [paidFor, setPaidFor] = useState(false);


  const handleApprove = (orderId) => {
    // send a request to the backend server
    setPaidFor(true);
  };

  if (paidFor) {
    toast.success(`Payment by ${user} successful`);
  }

  return (
    <PayPalScriptProvider
      options={{ "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: description,
                amount: {
                  value: total,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const order = await actions.order.capture();
          console.log("order", order);
          handleApprove(data.orderID);
        }}
      />
    </PayPalScriptProvider>
  );
};

export default Paypal;
