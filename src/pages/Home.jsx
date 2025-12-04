import Layout from "../components/Layout"
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import Img1 from "../assets/imagen1.png";
import { Link } from "react-router-dom";
import { GiftIcon, ShieldCheckIcon, TruckIcon, UserIcon } from "@heroicons/react/16/solid";

const Home = () => {
  return (
    <Layout>
      <section className="m-4 grid grid-cols-[70%_29%] grid-rows-2 gap-2 h-[85vh]">
        <div className="row-span-2">
          <img src={Slide1} alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div>
          <img src={Slide2} alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
        <div>
          <img src={Slide3} alt="" className="w-full h-full object-cover rounded-xl" />
        </div>
      </section>

      <section className="container mx-auto px-4 py-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center items-stretch">
          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <TruckIcon className="size-14 text-[#EC6A5D] mb-4 transition-colors duration-300 hover:text-[#d4493c]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Envío gratis a CABA</h3>
            <p className="text-gray-600 text-sm">Rápido y sin costo adicional.</p>
          </div>

          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <UserIcon className="size-14 text-[#FDC655] mb-4 transition-colors duration-300 hover:text-[#e9ad36]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Atención personalizada</h3>
            <p className="text-gray-600 text-sm">
              Contactanos a través de Whatsapp, Instagram o correo electrónico!
            </p>
          </div>

          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <ShieldCheckIcon className="size-14 text-[#055087] mb-4 transition-colors duration-300 hover:text-[#063f68]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Resultados rápidos</h3>
            <p className="text-gray-600 text-sm">El tiempo de entrega es de 3 a 5 días hábiles.</p>
          </div>

          <div className="flex flex-col items-center justify-start h-full transition-transform duration-300 hover:scale-105 p-4">
            <GiftIcon className="size-14 text-[#9A6B9D] mb-4 transition-colors duration-300 hover:text-[#8a498f]" />
            <h3 className="font-semibold text-lg uppercase mb-2">Garantía por defectos</h3>
            <p className="text-gray-600 text-sm">
              Tenés 10 días desde que recibís tu pedido para revisarlo.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img src={Slide1} alt="Sets" className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 w-full bg-white/60 bg-opacity-70 px-4 py-3 flex justify-center items-center">
              <h3 className="text-xl font-bold uppercase text-[#d97345]">Combos</h3>
            </div>
            <Link
              to="/productos"
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out bg-[#EEB749] bg-opacity-30 text-white text-lg font-semibold"
            >
              Ver Combos
            </Link>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img src={Slide2} alt="Bibliotecas" className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 w-full bg-white/60 bg-opacity-70 px-4 py-3 flex justify-center items-center">
              <h3 className="text-xl font-bold uppercase text-[#d97345]">Jugueteros</h3>
            </div>
            <Link
              to="/productos"
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out bg-[#A4CBC7] bg-opacity-30 text-white text-lg font-semibold"
            >
              Ver Jugueteros
            </Link>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
            <img src={Slide3} alt="Todos los productos" className="w-full h-80 object-cover" />
            <div className="absolute bottom-0 w-full bg-white/60 bg-opacity-70 px-4 py-3 flex justify-center items-center">
              <h3 className="text-xl font-bold uppercase text-[#d97345]">Productos</h3>
            </div>
            <Link
              to="/productos"
              className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out bg-[#F0655E] bg-opacity-30 text-white text-lg font-semibold"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};


export default Home