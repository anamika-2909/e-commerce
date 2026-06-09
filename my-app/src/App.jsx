import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Layout from "./pages/Layout";

import Register from "./pages/Register";
import Loginpage from "./pages/Loginpage";
import Product from "./pages/product";
import Show from "./Show";
import Category from "./pages/category";
import Showcard from "./showcard";
const App = () => {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
        
              <Route path="/" element={<Home />} />
                 <Route
          path="/Register"
          element={<Register />}
        />
          <Route path="/About" element={<About />} />
             <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Contact" element={<Contact />} />
              <Route path="/Service" element={<Service />} />
              <Route path="/product" element={<Product />} />
              <Route path="/Show" element={<Show />} />
               <Route path="/category" element={<Category/>} />
                  <Route path="/category/showcard" element={<Showcard />} />
          </Route>
        
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default App