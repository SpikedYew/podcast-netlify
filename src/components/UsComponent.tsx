import Photo2 from "../assets/studio-1.webp";
import Photo3 from "../assets/studio-2.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function UsComponent() {
  return (
    <section className="text-dark dark:text-[#f6f6f6] mx-auto flex-col flex max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
      <div className="mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row">
        <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
          <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
            Poznaj nasze studio!
          </h2>
          <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
            Nasze studio podcastowe to przestrzeń, w której stworzysz
            profesjonalne nagrania. Zachęcamy do obejrzenia naszej galerii
            zdjęć!
          </p>
          <div className="mt-4 text-center md:text-left">
            <button
              aria-label="Studio"
              className="px-6 py-2 bg-dark dark:bg-light text-light hover:bg-light dark:hover:bg-dark dark:text-dark  hover:text-dark hover:border dark:hover:text-light rounded-md"
            >
              <a href="/studio">Zobacz więcej!</a>
            </button>
          </div>
        </div>
        <LazyLoadImage
          alt="Studio Podcastowe - Studio Uszko"
          src={Photo2}
          className="w-full md:w-[50%] h-auto object-cover"
        />
      </div>

      <div className="mt-10 mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
          <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
            Skontaktuj się z nami!
          </h2>
          <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            dolores iste sit eos doloribus officia molestias quae deleniti
            veritatis numquam neque accusamus, sed dolorem eius, exercitationem
            magni quia nihil corporis.
          </p>
          <div className="mt-4 text-center md:text-left">
            <button
              aria-label="Kontakt"
              className="px-6 py-2 bg-dark dark:bg-light text-light hover:bg-light dark:hover:bg-dark dark:text-dark  hover:text-dark hover:border dark:hover:text-light rounded-md"
            >
              <a href="/kontakt">Zobacz więcej!</a>
            </button>
          </div>
        </div>
        <LazyLoadImage
          alt="Nagranie podcastu - Studio Uszko"
          src={Photo3}
          className="w-full md:w-[50%] h-auto object-cover"
        />
      </div>
    </section>
  );
}
