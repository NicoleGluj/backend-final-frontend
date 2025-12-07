import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Products from "../pages/Products"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Contact from "../pages/Contact"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp