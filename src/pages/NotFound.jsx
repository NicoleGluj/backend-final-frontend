import { useNavigate } from "react-router-dom"
import Layout from "../components/Layout"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center min-h-[80vh] text-center">
        <h1 className="text-5xl md:text-5xl font-medium text-[#9A6B9D] uppercase">
          404 - Página no encontrada
        </h1>
        <p className="mt-4 text-[#9A6B9D] text-lg">
          La página que buscás no existe o fue movida.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-8 px-6 py-2 rounded-2xl bg-[#EC6A5D] text-white uppercase font-medium border-2 border-[#EC6A5D]  hover:bg-[#EC6A5D] transition-all duration-300"
        >
          Volver al inicio
        </button>
      </section>
    </Layout>
  )
}

export default NotFound