import { useState } from "react"

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
    e.preventdefault()

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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
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
              <input
                name="text"
                type="message"
                onChange={handleChange} />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact