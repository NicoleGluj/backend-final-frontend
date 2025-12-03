import logo from "../assets/logo.png"

const Header = () => {
  return (
    <>
      <header className="relative m-6 flex items-center justify-between">
        <div className="w-40 flex items-center">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-5">
          <a href="">Inicio</a>
          <a href="">Productos</a>
          <a href="">Conocenos</a>
        </nav>

        <div className="flex items-center justify-center gap-3">
          <button className="px-5 py-0.5 border-2 border-[#FFA64C]  text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
            Registrarme
          </button>
          <button className="px-5 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
            Iniciar Sesion
          </button>
        </div>

      </header>
    </>
  )
}

export default Header
