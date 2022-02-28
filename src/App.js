import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import ProductDetails from "./components/productDetails/ProductDetails";
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
