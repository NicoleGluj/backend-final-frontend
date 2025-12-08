import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"

const API_URL = import.meta.env.VITE_API_URL;


const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const responseData = await response.json()

      if (!responseData) {
        alert(responseData.error || "Error al registarse")
        return
      }

      alert("Usuario registrado con exito")
      navigate("/login")

    } catch (error) {
      console.log("Error al registrar el usuario", error)
    }
  }

  return (
    <>
      <Layout>
        <section className="flex flex-col items-center justify-center h-[85vh] w-full max-w-[420px] mx-auto px-6">
          <div className="border border-gray-300 px-15 py-20 rounded-2xl shadow-xl">
            <div className="flex flex-col">
              <h2 className="text-4xl text-center font-semibold text-[#ecae33] mb-3">
                Registro
              </h2>
              <p className="text-sm font-medium text-gray-500 mb-8 text-center">
                ¡Bienvenido! Completa los datos <br /> a continuacion para registarte:
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <p className="text-gray-600 mb-2 font-medium">
                  Ingrese su correo electronico
                </p>
                <input
                  className="border border-gray-200 p-2 w-full rounded-2xl text-sm text-gray-400 mb-6"
                  type="text"
                  name="email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="text-gray-600 mb-2 font-medium">
                  Ingrese su contraseña
                </p>
                <input
                  className="border border-gray-200 p-2 w-full rounded-2xl text-sm text-gray-400 mb-6"
                  type="password"
                  onChange={handleChange}
                />
              </div>
              <div>
                <p className="text-gray-600 mb-2 font-medium">
                  Repita su contraseña
                </p>
                <input
                  className="border border-gray-200 p-2 w-full rounded-2xl text-sm text-gray-400 mb-8"
                  type="password"
                  name="password"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center justify-center flex-col">
                <button
                  className="px-5 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400"
                  type="submit"
                >
                  Registarse
                </button>
                <p className="text-sm font-medium text-gray-500 mt-3 text-center">
                  ¿Ya tienes una cuenta? <Link className="font-semibold " to="/login"><br />Iniciar sesion</Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </Layout >
    </>
  )
}

export default Register