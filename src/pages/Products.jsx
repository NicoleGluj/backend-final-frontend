import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { CATEGORIES } from "../constants/categories"
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"
import UpdateProduct from "../components/UpdateProduct"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/16/solid"

const API_URL = import.meta.env.VITE_API_URL;

const getImageUrl = (image) => {
  if (!image) return "";
  if (image.startsWith("http")) return image;
  return `${API_URL}/${image.replace(/\\/g, "/")}`;
};

const Products = () => {
  const [deleteOpen, setDeleteOpen] = useState(false)
  const [productToDelete, setProductToDelete] = useState(null)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const initialErrorState = {
    success: null,
    notification: null,
    error: {
      fetch: null,
      delete: null
    }
  }

  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [filters, setFilter] = useState({
    name: "",
    stock: "",
    category: "",
    minPrice: "",
    maxPrice: ""
  })

  const [responseServer, setResponseServer] = useState(initialErrorState)

  const { user, token } = useAuth()

  const fetchingProducts = async (query = "") => {
    setResponseServer(initialErrorState)

    try {
      const response = await fetch(`${API_URL}/products?${query}`, {
        method: "GET"
      })

      const dataProducts = await response.json()
      setProducts(dataProducts.data.reverse())
      setResponseServer({
        success: true,
        notification: "Exito al cargar los productos",
        error: {
          ...responseServer.error,
          fetch: true
        }
      })

    } catch (e) {
      setResponseServer({
        success: false,
        notification: "Error al cargar los productos",
        error: {
          ...responseServer.error,
          fetch: false
        }
      })
    }
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const handleAskDelete = (idProduct) => {
    setProductToDelete(idProduct)
    setDeleteOpen(true)
  }

  const deleteProduct = async () => {
    if (!productToDelete) return

    setDeleteLoading(true)

    try {
      const response = await fetch(`${API_URL}/products/${productToDelete}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      const dataResponse = await response.json()

      if (!dataResponse) {
        alert("Error al eliminar el producto")
        return
      }

      setProducts(products.filter((p) => p._id !== productToDelete))
      alert("Producto borrado con exito")
    } catch (e) {
      setResponseServer({
        ...responseServer,
        error: {
          ...responseServer.error,
          delete: "Error al eliminar el producto"
        },
        success: false,
        notification: "Error al eliminar el producto"
      })
    } finally {
      setDeleteLoading(false)
      setDeleteOpen(false)
      setProductToDelete(null)
    }
  }

  const handleUpdateProduct = (p) => {
    setSelectedProduct(p)
  }

  const handleChange = (e) => {
    setFilter({
      ...filters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const query = new URLSearchParams()

    if (filters.name) query.append("name", filters.name)
    if (filters.stock) query.append("stock", filters.stock)
    if (filters.category) query.append("category", filters.category)
    if (filters.minPrice) query.append("minPrice", filters.minPrice)
    if (filters.maxPrice) query.append("maxPrice", filters.maxPrice)

    fetchingProducts(query.toString())
  }

  const handleResetFilters = () => {
    setFilter({
      name: "",
      stock: "",
      category: "",
      minPrice: "",
      maxPrice: ""
    })
    setIsOpen(false)
  }

  return (
    <>
      <Layout>
        <section className=" py-10 text-center border-b  border-t border-amber-400">
          <h1 className="text-5xl font-bold text-[#FDC655] mb-4">
            Nuestros productos
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conoce todos nuestros productos en esta seccion!
          </p>
        </section>

        {/* SECCION FILTROS PANTALLAS GRANDES */}
        <section className="items-center hidden lg:flex m-3 gap-4">
          <div className="min-w-[250px] px-5 py-2 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
            <Link to="/agregar-producto">AÑADIR PRODUCTO</Link>
          </div>
          <div className="border w-full border-gray-300 p-1 px-1 rounded-2xl" >
            <form
              onSubmit={handleSubmit}
              className="flex justify-between">
              <div className="flex items-center gap-4">
                <input
                  className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
                  type="text"
                  name="name"
                  placeholder="Buscar por nombre"
                  onChange={handleChange}
                  value={filters.name}
                />
                <input
                  className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
                  type="number"
                  name="stock"
                  placeholder="Ingrese el stock"
                  onChange={handleChange}
                  value={filters.stock}
                />
                <select
                  className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
                  name="category"
                  onChange={handleChange}
                  value={filters.category}
                >
                  <option defaultValue>
                    Seleccioná una opción
                  </option>
                  {
                    CATEGORIES.map((category) =>
                      <option
                        key={category.id}
                        value={category.value}
                      >
                        {category.content}
                      </option>)
                  }
                </select>
                <input
                  className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
                  type="number"
                  name="minPrice"
                  placeholder="Precio mínimo"
                  onChange={handleChange}
                  value={filters.minPrice}
                />
                <input
                  className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
                  type="number"
                  name="maxPrice"
                  placeholder="Precio máximo"
                  onChange={handleChange}
                  value={filters.maxPrice}
                />
              </div>
              <div className="flex gap-2">
                <button
                  className="px-4 rounded-2xl font-semibold text-[#C7C7C7] transform duration-400 hover:text-[#a0a0a0]"
                  type="submit">
                  Aplicar filtros
                </button>
                <button
                  className="bg-[#C7C7C7] transform duration-400 hover:bg-[#a0a0a0] p-1 px-4 rounded-2xl font-semibold text-white"
                  type="button"
                  onClick={handleResetFilters}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* SECTION PANTALLAS CHICAS */}
        <div className="flex flex-col items-start mx-4 mt-3 sm:flex-row sm:items-center sm:gap-4">
          {user &&
            <div className="lg:hidden w-full sm:w-fit px-5 py-2 border bg-[#FFA64C] text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400">
              <Link to="/agregar-producto" className="block text-center w-full">
                AÑADIR PRODUCTO
              </Link>
            </div>}
          <div className="mt-3 lg:hidden inline-flex items-center gap-3 border border-gray-400 p-1 px-3 rounded-2xl sm:mt-0 relative">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-[#eb9665] focus:outline-none"
            >
              <AdjustmentsHorizontalIcon className="size-8" />
            </button>
            <p className="font-semibold text-gray-500">Filtros</p>
          </div>
        </div>

        <section className={`origin-top transform bg-white shadow-md text-center w-full overflow-hidden z-50 transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] scale-y-100 opacity-100 mt-2 flex flex-col gap-4 pb-3" : "max-h-0 scale-y-0 opacity-0"}`} >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-baseline gap-2 mt-4">
            <input
              className="min-w-[290px] border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="text"
              name="name"
              placeholder="Buscar por nombre"
              onChange={handleChange}
              value={filters.name}
            />
            <input
              className="min-w-[290px] border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="number"
              name="stock"
              placeholder="Ingrese el stock"
              onChange={handleChange}
              value={filters.stock}
            />
            <select
              className="min-w-[290px] border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              name="category"
              onChange={handleChange}
              value={filters.category}
            >
              <option defaultValue>
                Seleccioná una opción
              </option>
              {
                CATEGORIES.map((category) =>
                  <option
                    key={category.id}
                    value={category.value}
                  >
                    {category.content}
                  </option>)
              }
            </select>
            <input
              className="min-w-[290px] border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="number"
              name="minPrice"
              placeholder="Precio mínimo"
              onChange={handleChange}
              value={filters.minPrice}
            />
            <input
              className="min-w-[290px] border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="number"
              name="maxPrice"
              placeholder="Precio máximo"
              onChange={handleChange}
              value={filters.maxPrice}
            />
            <div className="flex justify-center items-center gap-2 m-6">
              <button
                className="px-4 rounded-2xl font-semibold text-[#C7C7C7] transform duration-400 hover:text-[#a0a0a0]"
                type="submit">
                Aplicar filtros
              </button>
              <button
                className="bg-[#C7C7C7] transform duration-400 hover:bg-[#a0a0a0] p-1 px-4 rounded-2xl font-semibold text-white"
                type="button"
                onClick={handleResetFilters}>
                Cancelar
              </button>
            </div>
          </form>
        </section>

        {/* PRODUCTOS MAP */}
        <section className="min-h-[60vh] m-4">
          <div
            className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]"
          >
            {products.map((p, i) => (
              <article
                key={p._id || i}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full max-w-[300px] mx-auto transition hover:shadow-lg hover:scale-101"
              >
                <div className="p-1 flex flex-col flex-1">
                  <span className="text-xs text-center uppercase font-medium tracking-wide text-gray-500">
                    {p.category}
                  </span>
                </div>
                <div className="h-60 w-full overflow-hidde bg-gray-100">
                  {p.image ? (
                    <img
                      src={getImageUrl(p.image)}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
                      Sin imagen
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <h3 className="text-lg font-semibold text-[#055087] uppercase">
                    {p.name}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    ${p.price}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-3">
                    {p.description}
                  </p>
                  <p className="text-xs text-gray-400">
                    Stock disponible: <span className="font-medium">{p.stock}</span>
                  </p>
                  <div className="mt-4  flex items-center justify-between">
                    {user && (
                      <div className="w-full flex gap-2">
                        <button
                          onClick={() => handleUpdateProduct(p)}
                          className="w-1/2 px-5 py-0.5 border-2 border-[#FFA64C]  text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400"
                        >
                          Actualizar
                        </button>
                        <button
                          onClick={() => handleAskDelete(p._id)}
                          className="w-1/2 px-5 py-1 border bg-[#FFA64C]  text-white rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400"
                        >
                          Borrar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section >

        {deleteOpen && (
          <section className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg mx-4 p-6 relative">
              <button
                type="button"
                onClick={() => setDeleteOpen(false)}
                className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-4xl leading-none"
              >
                ×
              </button>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                ¿Desea eliminar el producto?
              </h2>
              <p className="text-sm text-gray-500">
                Esta acción no se puede deshacer.
              </p>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => setDeleteOpen(false)}
                  className="bg-[#C7C7C7] transform duration-400 hover:bg-[#a0a0a0] px-4 py-1 rounded-2xl font-semibold text-white"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={deleteProduct}
                  disabled={deleteLoading}
                  className="px-4 py-1 border-2 border-[#FFA64C] text-[#FFA64C] rounded-2xl font-medium transform hover:-translate-y-1 transition duration-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {deleteLoading ? "Eliminando..." : "Eliminar"}
                </button>
              </div>
            </div>
          </section>
        )}
        {
          selectedProduct &&
          <UpdateProduct
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onUpdate={fetchingProducts}
          />
        }


      </Layout >
    </>
  )
}

export default Products