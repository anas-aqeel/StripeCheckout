import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />  
          <Route path="/product/:id" element={<Product /> } />  
        </Routes>
      </BrowserRouter>
      <Cart open={open} setOpen={setOpen} />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
