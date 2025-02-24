import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import photo from "../assets/gal/1.jpg";
import data from "./carouselData.json";
export interface DarkMode {
  darkMode: boolean;
}

export default function Carousel({ darkMode }: DarkMode) {
  return (
    <>
      <div className="w-auto flex justify-center items-center h-[90vh]">
        <BsArrowLeftCircleFill size={40} fill={darkMode ? "white" : "black"} />
        <LazyLoadImage src={photo} alt="" className="w-[70%] p-4" />
        <BsArrowRightCircleFill size={40} fill={darkMode ? "white" : "black"} />
        {/* <span className="absolute">
          <BsArrowLeftCircleFill fill="white" />
        </span> ss*/}
      </div>
    </>
  );
}
