import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { useAuth } from "../context/AuthContext"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="relative flex items-center justify-between">
      <div className="m-6 w-40 flex items-center">
        <img src={logo} alt="Logo" />
      </div>

      {/* PANTALLAS GRANDES */}
      <nav className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 items-center justify-center">
        <ul className="flex gap-5">
          <li>
            <Link
              to="/"
              className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#9A6B9D] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#055087] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
              Productos
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#EC6A5D] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
              Conocenos
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#FDC655] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
      {!user &&
        <div className="hidden lg:flex items-center justify-center gap-3 mr-6 ml-auto">
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
        </div>}
      {user &&
        <div className="hidden lg:flex items-center justify-center gap-3 mr-6 ml-auto">
          <button
            onClick={logout}
            className="px-5 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
            Cerrar sesion
          </button>
        </div>
      }

      <div className="m-6 lg:hidden ml-auto">
        <button
          onClick={toggleMenu}
          className="text-gray-500 hover:text-[#eb9665] focus:outline-none">
          {isOpen ? (
            <XMarkIcon className="size-8" />)
            :
            (<Bars3Icon className="size-8" />)}
        </button>
      </div>

      {/* PANTALLAS CHICAS */}
      <section className={`origin-top transform bg-white shadow-md lg:hidden absolute top-full text-center w-full overflow-hidden z-50 transition-all duration-300 ease-in-out ${isOpen ? "max-h-120 scale-y-100 opacity-100 flex flex-col gap-4 mb-9" : "max-h-0 scale-y-0 opacity-0"
        }`}>
        <nav>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#9A6B9D] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                onClick={toggleMenu}
                className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#055087] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                Productos
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                onClick={toggleMenu}
                className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#EC6A5D] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                Conocenos
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:w-full after:origin-bottom after:scale-x-0 after:bg-[#EC6A5D] after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom hover:after:scale-x-100">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        {!user &&
          <div className={`lg:hidden flex flex-col items-center justify-center w-auto mx-auto gap-2 bg-white pb-4 pt-2 origin-top transform transition-all duration-300 ease-in-out ${isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}>
            <Link
              to="/register"
              className="px-10 py-0.5 border-2 border-[#FFA64C]  text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
              Registrarme
            </Link>
            <Link
              to="/login"
              className="px-10 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
              Iniciar Sesion
            </Link>
          </div>}
        {
          user &&
          <div>
            <button
              onClick={logout}
              className="px-10 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400 mb-8">
              Cerrar sesion
            </button>
          </div>
        }
      </section>

    </header >
  )
}

export default Header
