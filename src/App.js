import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import ProductDetails from "./components/productDetails/ProductDetails";
import About from "./pages/About/About";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import NewProduct from "./pages/createProducts/NewProduct";
import FeaturedProducts from "./pages/Home/FeaturedProducts";
import Homepage from "./pages/Home/Homepage";
import NewProducts from "./pages/Home/NewProducts";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import ProductList from "./pages/productlist/ProductList";
import Profile from "./pages/Profile/Profile";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
          </Route>
          <Route
            path="/products"
            element={<PrivateRoute component={ProductList} />}
          />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/create" element={<NewProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/checkout"
            element={<PrivateRoute component={Checkout} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
