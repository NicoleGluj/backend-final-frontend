import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: ""
  })

  const navigate = useNavigate()
  const { token } = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dataToSend = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    }

    try {
      const response = await fetch(`http://localhost:3000/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dataToSend)
      })

      if (!response) {
        alert("No se pudo agregar el producto")
        return
      }

      alert("Producto agregado con exito")
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: ""
      })
      navigate("/")
    } catch (error) {
      console.log("Error al agregar el producto")
    }
  }

  return (
    <>
      <section>
        <div>
          <h1 className="text-5xl font-bold text-[#FDC655] mb-4">
            Agregar producto
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Completa los datos para agregar un nuevo producto
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Nombre:</p>
            <input
              type="text"
              name="name"
              minLength={3}
              maxLength={20}
              onChange={(e) => handleChange(e)}
              value={formData.name}
            />
          </div>
          <div>
            <p>Descripcion:</p>
            <input
              type="text"
              name="description"
              minLength={3}
              maxLength={200}
              onChange={(e) => handleChange(e)}
              value={formData.description}
            />
          </div>
          <div>
            <p>Precio:</p>
            <input
              type="number"
              name="price"
              minLength={0}
              onChange={(e) => handleChange(e)}
              value={formData.price}
            />
          </div>
          <div>
            <p>Stock:</p>
            <input
              type="number"
              name="stock"
              minLength={0}
              onChange={(e) => handleChange(e)}
              value={formData.stock}
            />
          </div>
          <div>
            <p>Categoria:</p>
            <input
              type="text"
              name="category"
              minLength={3}
              maxLength={20}
              onChange={(e) => handleChange(e)}
              value={formData.category}
            />
          </div>
          <button type="submit">Agregar</button>
        </form>
      </section>
    </>
  )
}

export default AddProduct