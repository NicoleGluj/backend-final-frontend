import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { CATEGORIES } from "../constants/categories"

const UpdateProduct = ({ product, onUpdate, onClose }) => {
  const [loader, setLoader] = useState(false)
  const [formData, setFormData] = useState({
    name: product.name,
    description: product.description,
    stock: Number(product.stock),
    price: Number(product.price),
    category: product.category
  })
  const { token } = useAuth()

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
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg mx-4 p-6 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-4xl leading-none"
        >
          ×
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Editar producto
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-600">Nombre:</p>
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-600">Descripción:</p>
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-600">Stock:</p>
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-600">Precio:</p>
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-gray-600">Categoría:</p>
            <select
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Seleccioná una opción</option>

              {CATEGORIES.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.content}
                </option>
              ))}
            </select>
          </div>

          {/* Botones */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#C7C7C7] transform duration-400 hover:bg-[#a0a0a0] px-4 py-1 rounded-2xl font-semibold text-white"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-1 border-2 border-[#FFA64C] text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400"
            >
              {loader ? "Enviando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default UpdateProduct