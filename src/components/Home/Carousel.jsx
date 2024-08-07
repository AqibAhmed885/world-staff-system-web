import React, { useState, useEffect } from "react";
import { images } from "../../utils/data";



const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Change slide every 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      <div className="relative h-96 sm:h-96 md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:h-screen overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 sm:bottom-10 md:bottom-20 left-0 right-0 p-2 sm:p-4 md:p-6 text-white text-center">
              <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-3/4 sm:w-2/3 md:w-1/2 mx-auto py-2 sm:py-4 md:py-6 px-5 sm:px-10 bg-[#0e87c4] bg-opacity-50 border border-white font-semibold">
                {image.caption}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-6 md:left-10 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 sm:p-4 md:p-5 rounded-full focus:outline-none"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-6 md:right-10 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 sm:p-4 md:p-5 rounded-full focus:outline-none"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
