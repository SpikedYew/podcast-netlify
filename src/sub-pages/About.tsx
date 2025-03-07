import { Helmet } from "react-helmet";
import UsComponent from "../components/UsAbout";

export default function About() {
  return (
    <>
      <Helmet>
        <title>O nas</title>
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

      <div>
        <UsComponent />
      </div>
    </>
  );
}
