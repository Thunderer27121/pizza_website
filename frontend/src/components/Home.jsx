import {motion}  from "motion/react";
import { useState } from "react";
import { useEffect } from "react";

const pizzas = [
  { id: 1, name: "Margherita", img: "/images/margretta.avif" },
  { id: 2, name: "Pepperoni", img: "/images/pepproni.avif" },
  { id: 3, name: "Veggie", img: "/images/veggie.avif" },
  { id: 4, name: "BBQ Chicken", img: "/images/bbq.avif" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? pizzas.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === pizzas.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
  const nextIndex =
    currentIndex === pizzas.length - 1 ? 0 : currentIndex + 1;

  const img = new Image();
  img.src = pizzas[nextIndex].img;
}, [currentIndex]);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center px-4 py-10 bg-gradient-to-br from-[#1f1c2c] to-[#928DAB] text-white">
      
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 px-4 flex items-center justify-center">
        <motion.img
          src={"/images/pizza.avif"}
          loading="eager"
          decoding="auto"
          fetchpriority="high"
          alt="pizza"
          className="w-full h-auto lg:h-[600px] xl:h-[650px] max-h-[85vh] object-cover rounded-3xl shadow-2xl"
          initial={{scale : 0, opacity: 0 }}
          whileInView={{scale:1, opacity: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: true }}
        />
      </div>

      {/* Right Text and Carousel */}
      <div className="w-full lg:w-1/2 text-center space-y-6 px-4">
        
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow-md">
            Welcome to <span className="text-red-500">Hot 'N' Slice</span>
          </h1>
          <hr className="w-1/3 mx-auto mt-2 border-yellow-500 border-t-4 rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="px-2 sm:px-6 text-lg sm:text-xl italic text-gray-100">
            "Freshly baked perfection, straight from our oven to your plate. Hot
            'N' Slice – where every bite is a slice of heaven."
          </p>

          <div className="relative w-full sm:w-[75%] md:w-[60%] max-w-sm mx-auto mt-6 backdrop-blur-md bg-white/10 rounded-2xl p-3 shadow-2xl border border-white/20">
            <div className="relative overflow-hidden rounded-2xl h-[200px] sm:h-[240px] md:h-[260px] flex items-center justify-center">
              <img
                src={pizzas[currentIndex].img}
                loading="lazy"
                decoding="async"
                alt={pizzas[currentIndex].name}
                className="max-h-full max-w-full object-contain scale-105 hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-2 px-2 text-center text-lg font-semibold rounded-b-2xl backdrop-blur-sm">
                {pizzas[currentIndex].name}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 text-black hover:bg-yellow-300 p-2 sm:p-3 rounded-full shadow-xl transition duration-300"
            >
              ◀
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 text-black hover:bg-yellow-300 p-2 sm:p-3 rounded-full shadow-xl transition duration-300"
            >
              ▶
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
