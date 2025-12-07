import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <section class="bg-[#FFA64C]">
          <div class="px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
            <nav class="flex flex-wrap justify-center -mx-5 -my-2">
              <div class="px-5 py-2">
                <Link to="/" class="text-base leading-6 text-white hover:text-gray-900">
                  Inicio
                </Link>
              </div>
              <div class="px-5 py-2">
                <Link to="/products" class="text-base leading-6 text-white hover:text-gray-900">
                  Productos
                </Link>
              </div>
              <div class="px-5 py-2">
                <Link to="/aboutus" class="text-base leading-6 text-white hover:text-gray-900">
                  Conocenos
                </Link>
              </div>
            </nav>

            <div className="flex justify-center mt-8 space-x-6">
              <a
                href="https://www.facebook.com/people/Mimuri/61577002564910/"
                className="transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={25} color="#3b5998" />
              </a>
              <a
                href="https://www.instagram.com/mimuriok/"
                className="transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={25} color="#E1306C" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5491172381990&text&type=phone_number&app_absent=0"
                className="transition-transform duration-300 hover:scale-110"
              >
                <span className="sr-only">WhatsApp</span>
                <FaWhatsapp size={25} color="#25D366" />
              </a>
            </div>

            <p class="mt-8 text-base leading-6 text-center text-white">
              Sitio web creado por <a href="https://www.linkedin.com/in/nicole-gluj-640805210/" className="font-semibold">Nicole Gluj</a>
            </p>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer