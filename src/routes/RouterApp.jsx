import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"
import Products from "../pages/Products"
import Register from "../pages/Register"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp