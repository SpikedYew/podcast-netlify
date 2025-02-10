import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
export interface DarkMode {
  darkMode: boolean;
}
export default function Studio({ darkMode }: DarkMode) {
  return (
    <>
      <Helmet>
        <title>Studio</title>
        <meta
          name="description"
          content="Poznaj nas blizej i dowiedz się co takiego tworzymy w naszym studio!"
        />
        <meta name="keywords" content="" />

        <meta property="og:title" content="Amazing Website" />
        <meta
          property="og:description"
          content="This is a great website about amazing topics."
        />
        <meta property="og:image" content="/studio-uszko-og.png" />
        <meta property="og:url" content="/studio-uszko-og.png" />
      </Helmet>
      <Carousel darkMode={darkMode} />
    </>
  );
}
