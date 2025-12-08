import { useState } from "react"
import Layout from "../components/Layout"

const API_URL = import.meta.env.VITE_API_URL;


const Contact = () => {
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (loading) return

    setError("")
    setSuccess("")
    setLoading(true)

    try {
      const response = await fetch(`${API_URL}/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const dataResponse = await response.json()
      setSuccess("Correo enviado con éxito")

      setForm({
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      console.error("Error al enviar correo:", error)
      setError(error.message || "Error inesperado al enviar correo")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout>
      <section>
        <div className="py-10 text-center border-b border-t border-amber-400">
          <h1 className="text-5xl font-bold text-[#FDC655] mb-4">
            Contactanos
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Dejanos tu mensaje y responderemos a la brevedad
          </p>
        </div>
        <div className="m-4 min-h-[50vh]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-lg mx-auto mt-6"
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Correo electrónico:</p>
              <input
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                type="email"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Asunto:</p>
              <input
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                type="text"
                name="subject"
                minLength={3}
                maxLength={50}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Mensaje:</p>
              <textarea
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full min-h-[120px]"
                name="message"
                minLength={5}
                maxLength={500}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                disabled={loading}
                type="submit"
                className="px-5 py-1 border-2 border-[#FFA64C] text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400"
              >
                {loading ? "Enviando el correo..." : "Enviar"}
              </button>
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
                Correo enviado con exito
              </p>
            )}
          </form>
        </div>
      </section>
    </Layout>

  )
}

export default Contact