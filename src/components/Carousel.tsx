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
      <div className="w-full flex justify-center">
        <div className="w-auto flex justify-between items-center h-[90vh] max-w-[80vw]  relative">
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
            transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth effect
            className="w-[800px] h-[700px] overflow-hidden realtive z-0 items-center justify-center flex bg-purple-50"
          >
            <LazyLoadImage
              src={data.slides[image].src}
              alt=""
              className="w-[800px] realtive p-4"
            />
          </motion.div>

          <BsArrowRightCircleFill
            size={40}
            fill={darkMode ? "white" : "black"}
            onClick={nextImage}
            className="cursor-pointer realtive right-4 z-10"
          />
        </div>
      </div>
    </>
  );
}
