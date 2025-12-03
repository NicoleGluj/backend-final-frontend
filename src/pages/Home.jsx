import Layout from "../components/Layout"
import { useState, useEffect } from "react";

import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";

const slides = [
  {
    image: Slide1,
  },
  {
    image: Slide2,
  },
  {
    image: Slide3,
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  const goNext = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const goPrev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <Layout>
      <div className="relative m-6 h-[85vh] overflow-hidden rounded-lg ">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 
      ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <img
                src={slide.image}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-white hover:bg-white/20 transition"
        >
          <span className="sr-only">Anterior</span>
          &#10094;
        </button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full px-3 py-2 text-white hover:bg-white/20 transition"
        >
          <span className="sr-only">Siguiente</span>
          &#10095;
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 w-8 rounded-full transition ${index === current ? "bg-white" : "bg-white/40"
                }`}
            >
              <span className="sr-only">Ir al slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
};


export default Home