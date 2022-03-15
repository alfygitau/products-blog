import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import ProductDetails from "./components/productDetails/ProductDetails";
import Cart from "./pages/cart/Cart";
import NewProduct from "./pages/createProducts/NewProduct";
import ProductList from "./pages/productlist/ProductList";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/create" element={<NewProduct/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
