import Layout from "../components/Layout"
import img1 from "../assets/about1.jpg"
import img2 from "../assets/about2.jpg"
import img3 from "../assets/about3.jpg"

const AboutUs = () => {
  return (
    <>
      <Layout >
        <section className="m-6 py-6">
          <section className="py-10 text-center border-b  border-t border-amber-400">
            <h1 className="text-5xl font-bold text-[#FDC655] mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Muebles de diseño para la infancia
            </p>
          </section>

          <section className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-[#EC6A5D]">
                  Nuestra historia
                </h2>
                <p className="text-gray-700 text-justify leading-relaxed">
                  En Mimuri diseñamos más que muebles: creamos espacios que acompañan la infancia con amor, seguridad y estilo.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed">
                  Todo comenzó cuando nos convertimos en padres primerizos.
                  Con la llegada de nuestra hija <span className="font-semibold">Milena</span>, descubrimos la importancia
                  de un entorno que fomente la creatividad, el juego y el crecimiento.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed">
                  Desde esa experiencia, decidimos ayudar a la infancia de otros niños,
                  creando muebles únicos que reflejan nuestra visión como familia para otras familias.
                </p>
                <h3 className="pt-4 text-3xl font-bold text-[#9A6B9D]">
                  Nuestros productos
                </h3>
                <p className="text-gray-700 text-justify leading-relaxed">
                  Diseñamos muebles de diseño para la infancia, pensados en cada detalle para brindar comodidad y estilo a los espacios de juego y descanso.
                </p>
                <p className="text-gray-700 text-justify leading-relaxed">
                  Cada producto refleja nuestra filosofía: funcionalidad, estética y cariño en cada terminación.
                </p>
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[460px] md:h-[620px] lg:h-[460px]">
                <div className="h-full">
                  <img
                    src={img1}
                    alt="imagen 1"
                    className="w-full h-full object-cover rounded "
                  />
                </div>
                <div className="h-full">
                  <img
                    src={img2}
                    alt="imagen 2"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="col-span-2 h-full">
                  <img
                    src={img3}
                    alt="imagen 3"
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-[#055087] border-3 px-5 rounded-2xl py-6 flex flex-col justify-center items-center text-center">
            <div className="">
              <div>
                <h2 className="text-3xl justify-center font-bold text-[#055087] mb-4">
                  "Hecho a mano, pensado con amor"
                </h2>
                <p className="text-[#055087] text-center leading-relaxed mb-4">
                  Cada pieza está hecha de forma artesanal, con materias nobles y líneas suaves que invitan a jugar, explorar y crecer.
                </p>
              </div>
            </div>
          </section>
        </section>
      </Layout >
    </>
  )
}

export default AboutUs