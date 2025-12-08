import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import { useAuth } from "../context/AuthContext"

const API_URL = import.meta.env.VITE_API_URL;


const Login = () => {
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/"

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

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Por favor completá todos los campos")
      return
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(formData.email)) {
      setError("Correo electrónico inválido")
      return
    }

    setLoading(true)
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const responseData = await response.json()

      if (!response.ok || !responseData.success) {
        alert(responseData.error || responseData.messagge || "Error al iniciar sesión")
        return
      }

      login(responseData.token)
      setSuccess("Acceso concedido. Redirigiendo...")
      setTimeout(() => {
        navigate(from, { replace: true })
      }, 1500)
    } catch (error) {
      console.error("Error en login:", error)
      setError(error.message || "Error al iniciar sesión. Intentá nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Layout>
        <section className="flex flex-col items-center justify-center h-[85vh] w-full max-w-[405px] mx-auto px-6">
          <div className="border border-gray-300 px-12 py-15 rounded-2xl shadow-xl">
            <div className="flex flex-col">
              <h2 className="text-4xl text-center font-semibold text-[#ecae33] mb-3">
                Iniciar sesión
              </h2>
              <p className="text-sm font-medium text-gray-500 mb-8 text-center">
                ¡Que alegría verte de vuelta! Completa los datos  a continuacion <br /> para iniciar sesión:
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
                  {loading ? "Ingresando..." : "Ingresar"}
                </button>
                <p className="text-sm font-medium text-gray-500 mt-3">
                  ¿No tienes una cuenta? <Link className="font-semibold" to="/register">Registrate</Link>
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

export default Login