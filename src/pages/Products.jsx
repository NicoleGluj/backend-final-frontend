import Layout from "../components/Layout"

const Products = () => {
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
          <form className="flex items-center justify-baseline gap-2">
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="text"
              name="name"
              placeholder="Buscar por nombre"
            />
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="number"
              name="stock"
              placeholder="Ingrese el stock"
            />
            <select
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              name="category"
            >
              <option value="" disabled selected>
                Seleccioná una opción
              </option>
            </select>
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="number"
              name="minPrice"
              placeholder="Precio mínimo"
            />
            <input
              className="border border-gray-200 p-1 px-2 rounded-2xl text-sm text-gray-400"
              type="number"
              name="maxPrice"
              placeholder="Precio máximo"
            />
          </form>
          <div className="flex justify-center items-center gap-2">
            <button
              className="border border-[#C7C7C7] p-1 px-4 rounded-2xl font-semibold text-[#C7C7C7]"
              type="submit">
              Aplicar filtros
            </button>
            <button
              className="bg-[#C7C7C7] p-1 px-4 rounded-2xl font-semibold text-white"
              type="button">
              Cancelar
            </button>
          </div>
        </section>
      </Layout >
    </>
  )
}

export default Products