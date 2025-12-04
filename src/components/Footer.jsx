import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer>
        <section class="bg-[#FFA64C]">
          <div class="px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
              <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Inicio
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Productos
                </a>
              </div>
              <div class="px-5 py-2">
                <a href="#" class="text-base leading-6 text-white hover:text-gray-900">
                  Conocenos
                </a>
              </div>
            </nav>

            <div className="flex justify-center mt-8 space-x-6">
              <a
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={25} color="#3b5998" />
              </a>
              <a
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={25} color="#E1306C" />
              </a>
              <a
                href="#"
                className="transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp size={25} color="#25D366" />
              </a>
            </div>

            <p class="mt-8 text-base leading-6 text-center text-white">
              Sitio web creado por <a href="#" className="font-semibold">Nicole Gluj</a>
            </p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer