import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const Register = () => {
  return (
    <>
      <Layout>
        <section className="min-h-screen flex items-center justify-center px-4flex flex-col m-28 border-4 p-10 border-[#FDC655] rounded-3xl w-full max-w-md bg-white shadow-lg">
          <div className="flex flex-col">
            <h2 className="text-4xl text-center font-semibold text-[#ecae33] mb-2">
              Registro
            </h2>
            <p className="text-sm font-medium text-gray-500 mb-8">
              ¡Bienvenido! Completa los datos a continuacion para registarte:
            </p>
          </div>
          <div className="flex flex-col">
            <form className="flex flex-col gap-5">
              <input
                className="border border-gray-200 p-2 w-full rounded-2xl text-sm text-gray-400"
                type="text"
                placeholder="Ingrese su usuario"
              />
              <input
                className="border border-gray-200 p-2 w-full rounded-2xl text-sm text-gray-400"
                type="text"
                placeholder="Ingrese su contraseña"
              />
              <button className="px-5 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400" >
                Registrarme
              </button>
            </form>
            <p className="text-sm font-medium text-gray-500 mt-3">
              ¿Ya tienes una cuenta? <Link className="font-semibold">Iniciar sesion</Link>
            </p>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Register