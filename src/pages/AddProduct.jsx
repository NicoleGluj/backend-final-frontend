import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import Layout from "../components/Layout"
import { CATEGORIES } from "../constants/categories"

const API_URL = import.meta.env.VITE_API_URL;


const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  })
  const [image, setImage] = useState(null)
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

    try {
      const formDataToSend = new FormData()

      formDataToSend.append("name", formData.name)
      formDataToSend.append("description", formData.description)
      formDataToSend.append("price", formData.price)
      formDataToSend.append("stock", formData.stock)
      formDataToSend.append("category", formData.category)

      if (image) {
        formDataToSend.append("image", image)
      }

      const response = await fetch(`${API_URL}/products`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: formDataToSend
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        alert(data.error || "No se pudo agregar el producto")
        return
      }

      alert("Producto agregado con exito")
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        image: ""
      })
      setImage(null)

      navigate("/products")
    } catch (error) {
      console.log("Error al agregar el producto")
    }
  }

  return (
    <Layout>
      <section>
        <div className="py-10 text-center border-b  border-t border-amber-400">
          <h1 className="text-5xl font-bold text-[#FDC655] mb-4">
            Agregar producto
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Completa toda la informacion para agregar un nuevo producto
          </p>
        </div>
        <div className="m-4 min-h-[50vh]">
          <form
            encType="multipart/form-data"
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-lg mx-auto mt-6"
          >
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Nombre:</p>
              <input
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                type="text"
                name="name"
                minLength={3}
                maxLength={20}
                required
                onChange={handleChange}
                value={formData.name}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Descripción:</p>
              <input
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                type="text"
                name="description"
                minLength={3}
                maxLength={200}
                required
                onChange={handleChange}
                value={formData.description}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Precio:</p>
              <input
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                type="number"
                name="price"
                min={0}
                required
                onChange={handleChange}
                value={formData.price}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Stock:</p>
              <input
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                type="number"
                name="stock"
                min={0}
                required
                onChange={handleChange}
                value={formData.stock}
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-600">Categoría:</p>
              <select
                className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                name="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Seleccioná una opción</option>
                {CATEGORIES.map(category => (
                  <option key={category.id} value={category.value}>
                    {category.content}
                  </option>
                ))}
              </select>
              <div className="flex flex-col gap-1 mt-2">
                <p className="text-sm font-medium text-gray-600">Imagen:</p>
                <input
                  className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400 w-full"
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="submit"
                className="px-5 py-1 border-2 border-[#FFA64C] text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400"
              >
                Agregar
              </button>
            </div>
          </form>

        </div>
      </section>

    </Layout>
  )
}

export default AddProduct