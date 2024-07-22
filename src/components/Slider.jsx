import React, { useEffect, useState } from 'react'
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState("next");
    const slider = [
      {
        id: 1,
        image: one,
      },
      {
        id: 2,
        image: two,
      },
      {
        id: 3,
        image: three,
      },
      {
        id: 4,
        image: four,
      },
    ];
  
    const nextSlide = () => {
      setDirection("next");
      setCurrentSlide((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setDirection("prev");
      setCurrentSlide((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
    };
  console.log(currentSlide)
    useEffect(() => {
      const interval = setInterval(() => {
        setDirection("next");
        setCurrentSlide((prev) => {
          if (prev === slider.length - 1) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className="relative">
    <div className="absolute hidden sm:flex z-40 w-full h-full  justify-between items-center">
      <FaArrowLeft
        onClick={prevSlide}
        className="bg-white rounded-lg sm:text-xl cursor-pointer"
      />
      <FaArrowRight
        onClick={nextSlide}
        className="bg-white rounded-lg sm:text-xl cursor-pointer "
      />
    </div>

    <div className="w-full h-full overflow-hidden">
      <div
        className={`flex transition transform duration-500 ${
          direction === "next"
            ? "transform translate-x-full"
            : "transform -translate-x-full"
        }`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {slider.map((item, index) => {
          return <img className="w-full h-auto" src={item.image} alt="" />;
        })}
      </div>
    </div>
  </div>
  )
}

export default Slider