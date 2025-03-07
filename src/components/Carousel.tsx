import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
// import photo from "../assets/gal/1.jpg";
import data from "./carouselData.json";
import { useState } from "react";
// import data from "./carouselData.json";
export interface DarkMode {
  darkMode: boolean;
}

export default function Carousel({ darkMode }: DarkMode) {
  // const dataUse = data.src.includes('')
  const [image, setImage] = useState(0);

  const nextImage = () => {
    setImage((prev) => (prev + 1) % data.slides.length);
  };

  const prevImage = () => {
    setImage((prev) => (prev === 0 ? data.slides.length - 1 : prev - 1));
  };

  //JSON files cannot import images with relative paths unless the images are inside public/
  return (
    <>
      <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center max-w-screen-2xl mx-auto">
        <div className="m-x-auto w-[90vw] md:w-[50%] flex justify-between items-center md:h-[90vh] relative">
          <BsArrowLeftCircleFill
            size={40}
            fill={darkMode ? "white" : "black"}
            onClick={prevImage}
            className="cursor-pointer realtive left-4 z-1"
          />

          {/* Motion div for animation */}
          <motion.div
            key={image}
            initial={{ opacity: 0, x: 0 }} // Start position (slide in)
            animate={{ opacity: 1, x: 0 }} // End position
            exit={{ opacity: 0, x: 0 }} // Exit animation
            transition={{ duration: 2, ease: "easeInOut" }} // Smooth effect
            className="w-[800px] md:h-[600px] overflow-hidden realtive z-0 items-center justify-center flex "
          >
            <LazyLoadImage
              src={data.slides[image].src}
              alt=""
              className="max-h-[600px] realtive p-4"
            />
          </motion.div>

          <BsArrowRightCircleFill
            size={40}
            fill={darkMode ? "white" : "black"}
            onClick={nextImage}
            className="cursor-pointer realtive right-4 z-10"
          />
        </div>
        <div className="w-full max-w-[90vw] md:w-[40%] flex flex-col justify-center m-4 p-4 md:p-5">
          <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
            Aranżacje
          </h2>
          <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
            Oferujemy idealne warunki do tworzenia treści, umożliwiając
            dostosowanie ustawień do Twoich indywidualnych potrzeb. W tym koloru
            i jasności światła, ustawienie kadru oraz mikrofonów, a także
            zaaranżowanie scenografii.
          </p>
        </div>
      </div>
    </>
  );
}
