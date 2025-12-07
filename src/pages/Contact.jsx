import { useState } from "react"
import Layout from "../components/Layout"

const Contact = () => {
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

    try {
      const response = await fetch(`http://localhost:3000/email/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const dataResponse = await response.json()
      console.log(dataResponse)

      setForm({
        email: "",
        subject: "",
        message: ""
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Layout>
        <section>
          <div>
            <div>
              <h1 className="text-5xl font-bold text-[#FDC655] mb-4">
                Contactanos
              </h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Dejanos tu mensaje y responderemos a la brevedad
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <p>Correo Electronico:</p>
                <input
                  name="email"
                  type="email"
                  onChange={handleChange} />
              </div>
              <div>
                <p>Asunto:</p>
                <input
                  name="subject"
                  type="text"
                  onChange={handleChange} />
              </div>
              <div>
                <p>Mensaje:</p>
                <textarea
                  type="text"
                  name="message"
                  onChange={handleChange} />
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Contact