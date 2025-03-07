import { LazyLoadImage } from "react-lazy-load-image-component";
import Photo1 from "../assets/glosz.webp";
import Photo2 from "../assets/ja.webp";
import Photo3 from "../assets/wawrzyn.webp";

export default function UsAbout() {
  return (
    <>
      {" "}
      <section className="text-dark dark:text-[#f6f6f6] mt-10 mb-10 mx-auto flex-col flex max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        {/* First Section */}
        <div className="mt-10 mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
            <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
              Bartosz Chmielecki - Manager
            </h2>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
              Masz pomysł na podcast, potrzebujesz animacji lub grafiki, a może
              chcesz dowiedzieć się więcej o naszym studio? Zadzwoń do mnie.
              Umówię Twoją wizytę, przygotuję grafikę, zaplanuję harmonogram
              publikacji, stworzę animacje i zajmę się wszystkim, czego
              potrzebujesz. Ode mnie dowiesz się wszystkiego o naszym studio.
              Tworzę również profesjonalne i nowoczesne strony internetowe.
            </p>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 hover:underline text-gray-750 text-center md:text-left">
              <a href="tel:48533320515"> +48 533 320 515 </a>
            </p>
            <div className="mt-4 text-center md:text-left">
              <a
                href="https://www.instagram.com/bartoszchmieleckiweb/"
                target="_blank"
              >
                <button
                  aria-label="Strony Internetowe i Grafika"
                  className="px-6 py-2 bg-dark transition-all dark:bg-light text-light hover:bg-light dark:hover:bg-dark dark:text-dark  hover:text-dark hover:border dark:hover:text-light rounded-md"
                >
                  Zobacz więcej!
                </button>
              </a>
            </div>
          </div>
          <LazyLoadImage
            alt="Bartosz Chmielecki - Grafika i Strony Internetowe"
            src={Photo2}
            className="w-full md:w-[50%] max-h-[500px] object-cover"
          />
        </div>

        {/* Second Section */}
        <div className="mt-10 mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
            <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
              Paweł Glosz - Audio
            </h2>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
              Zajmuję się wszystkim, co jest związane z audio. Na co dzień
              pracuję jako realizator dźwięku w MFC Studio, uczę gry na gitarze
              i tworzę autorską muzykę. W Studiu Uszko odpowiadam za nagrywanie
              audio, obróbkę materiałów dźwiękowych oraz komponowanie jingli,
              które będą promować Twój projekt. Krótko mówiąc: dźwięk, który
              wpadnie Ci w uszko!
            </p>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 hover:underline text-gray-750 text-center md:text-left">
              <a href="tel:48605508340">+48 605 508 340</a>
            </p>
            <div className="mt-4 text-center md:text-left">
              <a href="https://mfcstudio.pl/" target="_blank">
                <button
                  aria-label="Nagrywanie dzwięku Paweł Glosz - MFC STUDIO"
                  className="px-6 py-2 bg-dark transition-all dark:bg-light text-light hover:bg-light dark:hover:bg-dark dark:text-dark  hover:text-dark hover:border dark:hover:text-light rounded-md"
                >
                  Zobacz więcej!
                </button>
              </a>
            </div>
          </div>
          <LazyLoadImage
            alt="Paweł Glosz - Nagrywanie Audio"
            src={Photo1}
            className="w-full md:w-[50%] max-h-[500px] object-cover"
          />
        </div>

        {/* Third Section */}
        <div className="mx-auto items-center md:h-[50%] md:w-[90%] flex flex-col md:flex-row">
          <div className="w-full md:w-[50%] flex flex-col justify-center m-4 p-4 md:p-5">
            <h2 className="font-bold text-xl md:text-2xl text-center md:text-left">
              Paweł Wawrzynek - Video
            </h2>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 text-center md:text-left">
              Na co dzień zajmuję się fotografią, tworząc obrazy, które
              przyciągają uwagę i opowiadają historie. W Studiu Uszko działam w
              świecie podcastów i wideo , dbając o jakość nagrań, montaż i
              wizualną stronę Twojego projektu!
            </p>
            <p className="pt-4 text-sm md:text-base dark:text-gray-200 text-gray-750 hover:underline text-center md:text-left">
              <a href="tel:48790504071">+48 790 504 071</a>
            </p>
            <div className="mt-4 text-center md:text-left">
              <a
                href="https://www.instagram.com/wawrzynekpawel/"
                target="_blank"
              >
                <button
                  aria-label="Fotografia i nagrywanie Wideo - Paweł Wawrzynek"
                  className="px-6 py-2 bg-dark dark:bg-light transition-all text-light hover:bg-light dark:hover:bg-dark dark:text-dark  hover:text-dark hover:border dark:hover:text-light rounded-md"
                >
                  Zobacz więcej!
                </button>
              </a>
            </div>
          </div>
          <LazyLoadImage
            alt="Paweł Wawrzynek - Nagrywanie Wideo "
            src={Photo3}
            className="w-full md:w-[50%] max-h-[500px] object-cover"
          />
        </div>
      </section>
    </>
  );
}
