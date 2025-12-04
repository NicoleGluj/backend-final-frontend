import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <header className="relative m-6 flex items-center justify-between">
        <div className="w-40 flex items-center">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-5">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/aboutus">Conocenos</Link>
        </nav>

        <div className="flex items-center justify-center gap-3">
          <Link
            to="/register"
            className="px-5 py-0.5 border-2 border-[#FFA64C]  text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
            Registrarme
          </Link>
          <Link
            to="/login"
            className="px-5 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
            Iniciar Sesion
          </Link>
        </div>

      </header>
    </>
  )
}

export default Header
