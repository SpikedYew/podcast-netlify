import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import photo from "../assets/gal/1.jpg";
import data from "./carouselData.json";
import { useState } from "react";
// import data from "./carouselData.json";
export interface DarkMode {
  darkMode: boolean;
}

export default function Carousel({ darkMode }: DarkMode) {
  const [image, setImage] = useState(0);
  //JSON files cannot import images with relative paths unless the images are inside public/
  return (
    <>
      <div className="w-auto flex justify-center items-center h-[90vh]">
        <BsArrowLeftCircleFill size={40} fill={darkMode ? "white" : "black"} />
        <LazyLoadImage
          src={data.slides[image].src}
          alt=""
          className="w-[70%] p-4"
        />
        <BsArrowRightCircleFill size={40} fill={darkMode ? "white" : "black"} />
      </div>
    </>
  );
}
