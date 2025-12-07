import { useEffect, useState } from "react"
import Layout from "../components/Layout"

const Products = () => {
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
    stock: 0,
    category: "",
    minPrice: 0,
    maxPrice: 0
  })

  const [responseServer, setResponseServer] = useState(initialErrorState)

  // const [user, setUser] = useAuth()

  const fetchingProducts = async () => {
    setResponseServer(initialErrorState)

    try {
      const response = await fetch(`http://localhost:3000/products?${query}`, {
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
        eror: {
          ...setResponseServer.error,
          fetch: false
        }
      })
    }
  }

  useEffect(() => {
    fetchingProducts()
  }, [])

  const deleteProduct = async () => {
    if (!confirm("Esta seguro que desea eliminar el producto?")) {
      return
    }

    try {
      const response = await fetch(`http://localhost:3000/products/${idProduct}`, {
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

      setProducts(products.filter((p) => p._id !== idProduct))
      alert("Producto borrado con exito")
    } catch (e) {
      setResponseServer({ ...error, delete: "Error al eliminar el producto" })
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
      stock: 0,
      category: "",
      minPrice: 0,
      maxPrice: 0
    })
  }

  return (
    <>
      <Layout>
        <section className="py-10 text-center border-b  border-t border-amber-400">
          <h1 className="text-5xl font-bold text-[#FDC655] mb-4">
            Nuestros productos
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conoce todos nuestros productos en esta seccion!
          </p>
        </section>
        <section className="m-3 border border-gray-300 p-3 rounded-4xl flex justify-between" >
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-baseline gap-2">
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
              value={filters.name}
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
          </form>
          <div className="flex justify-center items-center gap-2">
            <button
              className="px-4 rounded-2xl font-semibold text-[#C7C7C7]"
              type="submit">
              Aplicar filtros
            </button>
            <button
              className="bg-[#C7C7C7] p-1 px-4 rounded-2xl font-semibold text-white"
              type="button"
              onClick={handleResetFilters}>
              Cancelar
            </button>
          </div>
        </section>
        <section>
          {products.map((p, i) => (
            <div>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <p>{p.price}</p>
              <p>{p.stock}</p>
              <p>{p.category}</p>
              {user &&
                <div>
                  <button onClick={() => handleUpdateProduct(p)}>Actualizar</button>
                  <button onClick={() => deleteProduct(p._id)}>Borrar</button>
                </div>
              }
            </div>))}
        </section>
        {!responseServer.error.fetch && <ToastMessage color={"red"} msg={responseServer.notification} />}
        {!responseServer.success && <ToastMessage color={"green"} msg={responseServer.notification} />}
      </Layout >
    </>
  )
}

export default Products