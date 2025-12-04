import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import AboutUs from "../pages/AboutUs"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterApp