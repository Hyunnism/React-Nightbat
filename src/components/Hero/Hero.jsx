import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import slider1 from './../../assets/Slider/3D4.webp';
import slider2 from './../../assets/Slider/3D6.webp';
import slider3 from './../../assets/Slider/Backrop2.webp';
import slider4 from './../../assets/Slider/Booth1.webp';
import slider5 from './../../assets/Slider/EO1.webp';
import slider6 from './../../assets/hider.png';
import { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    { img: slider1 },
    { img: slider2 },
    { img: slider3 },
    { img: slider4 },
    { img: slider5 },
    { img: slider6 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Autoplay effect
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Depend on currentIndex so it updates when index changes

  return (
    <div className="relative group w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] overflow-hidden rounded-lg">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full bg-center bg-cover duration-500 object-cover rounded-lg"
      >
        {/* Remove title and description */}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] left-2 sm:left-4 md:left-6 lg:left-8 xl:left-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10">
        <BsChevronLeft onClick={prevSlide} size={30}/>
      </div>

      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-y-[50%] right-2 sm:right-4 md:right-6 lg:right-8 xl:right-10 text-2xl rounded-full p-2 bg-black/30 text-white cursor-pointer z-10">
        <BsChevronRight onClick={nextSlide} size={30}/>
      </div>
    </div>
  );
};

export default Hero;
