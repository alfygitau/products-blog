import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "rsuite/dist/rsuite.min.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      <ToastContainer/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
