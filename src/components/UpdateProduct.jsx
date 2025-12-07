import { useState } from "react"
import { useAuth } from "../context/AuthContext"

const UpdateProduct = ({ product, onUpdate, onClose }) => {
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    stock: Number(product.stock),
    price: Number(product.price),
    category: product.category
  })
  const [token, setToken] = useAuth()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()


    const dataToUpdate = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock)
    }

    try {
      setLoader(true)
      const response = await fetch(`http://localhost:3000/products/${product._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(dataToUpdate)
      })

      onUpdate()
      onClose()
    } catch (error) {
      console.log("Error al actualizar el producto")
    } finally {
      setLoader(false)
    }
  }

  return (
    <section>
      <div>
        <h2>Editar producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Nombre:</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Descripcion:</p>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Stock:</p>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Precio:</p>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Categoria:</p>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <button type="submit">{loader ? "Enviando..." : "Enviar"}</button>
        </form>
        <button type="button" onClick={onClose}>Cancelar</button>
      </div>
    </section>
  )
}

export default UpdateProduct