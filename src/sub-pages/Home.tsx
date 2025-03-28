import { ReactTyped } from "react-typed";
import Photo1 from "../assets/krolik.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import IconComp from "../components/IconComp";
import UsComponent from "../components/UsComponent";
// import Portfolio from "../components/Portfolio";
import ContactHome from "../components/ContactHome";
import { Helmet } from "react-helmet";
import OfferComp from "../components/OfferComp";
export interface DarkMode {
  darkMode: boolean;
}

export default function Home({ darkMode }: DarkMode) {
  return (
    <>
      {" "}
      <Helmet>
        <title>Studio Uszko</title>
        <meta
          name="description"
          content="Studio Uszko oferuje profesjonalną produkcję, nagrywanie i edycję podcastów. Zapewniamy wysoką jakość audio dla firm, twórców i influencerów."
        />
        <meta
          name="keywords"
          content="Studio podcastowe, Produkcja podcastów, Nagrywanie podcastów, Edycja audio, Usługi podcastowe, Tworzenie podcastów, Montaż podcastów, Profesjonalne studio audio, Podcasty na zamówienie, Studio nagrań, Produkcja dźwięku, Nagrywanie rozmów, Podcasty dla firm, Studio nagrań w [Miasto], Sesje nagraniowe, Usługi audio dla podcastów, Studio nagrań dla twórców, Profesjonalna produkcja dźwięku, Podcasty biznesowe, Nagrywanie podcastów online, Edycja podcastów, Nagrania do podcastów, Podcasty dla influencerów, Podcasty edukacyjne, Audio branding podcastów, Podcasty z wywiadami, Twórczość audio, Producent podcastów, Obsługa podcastów, Studio do wynajęcia na nagrania."
        />

        <meta property="og:title" content="Studio Podcastowe - Studio Uszko" />
        <meta
          property="og:description"
          content="Studio Uszko oferuje profesjonalną produkcję, nagrywanie i edycję podcastów. Zapewniamy wysoką jakość audio dla firm, twórców i influencerów."
        />
        <meta property="og:image" content="/studio-uszko-og.png" />
        <meta property="og:url" content="/studio-uszko-og.png" />
      </Helmet>
      <header className="min-h-[90vh] sm:min-h-[90vh] text-dark dark:text-light pt-4 md:p-10 mx-auto flex max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        <div className="w-full flex flex-col md:flex-row">
          {/* Text Content */}
          <div className="w-full md:w-[50%] mt-8 md:mt-0 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold">
              NAGRAJ{" "}
              <ReactTyped
                strings={["PODCAST", "WEBINAR", "SZKOLENIE"]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="inline-block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold"
              />
            </h1>
            <p className="font-semibold text-sm md:text-md lg:text-lg xl:text-xl pt-4 dark:text-gray-200 text-gray-750 mr-0 md:mr-2">
              Chcesz nagrać podcast, webinar lub szkolenie, ale nie wiesz, jak
              ustawić kamerę, lampy czy mikrofon? Nie martw się – wpadnij do
              nas, a my zajmiemy się wszystkim!
            </p>
          </div>
          {/* Image */}
          <LazyLoadImage
            alt="Królik - Studio Podcastowe - Studio Uszko"
            src={Photo1}
            className="min-h-[60vh] md:w-[50%] mt-6 md:mt-0 max-h-[300px] md:max-h-[450px] lg:max-h-[500px] xl:max-h-[550px] object-cover "
          />
        </div>
      </header>
      <section className="w-[80%] md:w-auto h-[100%] sm:min-h-[30vh]  text-dark dark:text-light pt-2 md:p-10 mx-auto flex max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        <IconComp />
      </section>
      <section>
        <UsComponent />
      </section>
      <section>{/* <Portfolio darkMode={darkMode} /> */}</section>
      <section className="w-[80%] md:w-auto h-[100%] sm:min-h-[30vh]  text-dark dark:text-light pt-2 md:p-10 mx-auto flex max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl items-center justify-start">
        <OfferComp />
      </section>
      <section>
        <ContactHome darkMode={darkMode} />
      </section>
    </>
  );
}
