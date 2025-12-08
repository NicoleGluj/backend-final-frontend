import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"

const API_URL = import.meta.env.VITE_API_URL;


const Register = () => {
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [newPassword, setNewPassword] = useState("")
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
    if (loading) return

    setError("")
    setSuccess("")

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      setError("El correo electrónico no es válido")
      return
    }
    if (newPassword.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      return
    }
    if (newPassword !== formData.password) {
      setError("Las contraseñas no coinciden")
      return
    }

    setLoading(true)

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

      setSuccess("Acceso concedido. Redirigiendo...")
      setTimeout(() => {
        navigate("/login")
      }, 1500)

    } catch (error) {
      console.error("Error en registro:", error)
      setError(error.message || "Error inesperado al registrarte")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Layout>
        <section className="flex flex-col items-center justify-center h-[85vh] w-full max-w-[420px] mx-auto px-6">
          <div className="border border-gray-300 px-15 py-10 rounded-2xl shadow-xl">
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
                  name="newPassword"
                  onChange={(e) => setNewPassword(e.target.value)}
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
                  disabled={loading}
                  className="px-5 py-1 border bg-[#FFA64C] text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400 disabled:opacity-90 disabled:cursor-not-allowed"
                  type="submit"
                >
                  {loading ? "Creando cuenta..." : "Registrarse"}
                </button>
                <p className="text-sm font-medium text-gray-500 mt-3 text-center">
                  ¿Ya tienes una cuenta? <Link className="font-semibold " to="/login"><br />Iniciar sesion</Link>
                </p>
              </div>
              {error && (
                <p
                  data-testid="error-message"
                  className="mt-4 text-sm text-[#e74d0b] font-semibold text-center"
                >
                  {error}
                </p>
              )}

              {success && (
                <p
                  data-testid="success-message"
                  className="mt-4 text-sm text-[#649705]  font-semibold text-center"
                >
                  Acceso concedido. Redirigiendo...
                </p>
              )}
            </form>
          </div>
        </section>
      </Layout >
    </>
  )
}

export default Register