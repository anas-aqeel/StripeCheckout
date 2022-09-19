import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import GlobalContext from "./context/GlobalContext";
import Checkout from "./components/Checkout";

function App() {
  const [open, setOpen] = useState(false);

  return (
      <GlobalContext>
        <BrowserRouter>
          <Navbar setOpen={setOpen} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          <Cart open={open} setOpen={setOpen} />
          <Footer />
        </BrowserRouter>
      </GlobalContext>
  );
}

export default App;
