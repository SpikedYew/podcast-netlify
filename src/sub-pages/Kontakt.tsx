import ContactForm from "../components/ContactForm";
import { DarkMode } from "../App";
import { Helmet } from "react-helmet";

export default function Kontakt({ darkMode }: DarkMode) {
  return (
    <>
      <Helmet>
        <title>Kontakt</title>
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

      <h2 className="font-bold text-xl md:text-2xl text-center md:center mt-14">
        {/* Zostaw nam wiadmość, odezwiemy się do 24h! */}
        Test!
      </h2>
      <div className="sm:max-w-6xl mx-auto p-4 mt-4 mb-4 max-w-[98vw] min-h-[60vh]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[98vw]">
          <ContactForm />
          <div
            style={{
              overflow: "hidden",
              background: "none",
              width: "100%",
              height: "100%",
            }}
            className="min-h-[400px]"
          >
            <iframe
              title="Google Map"
              className="gmap_iframe"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                filter: darkMode ? "invert(90%) hue-rotate(180deg)" : "",
              }}
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Zabrze Lompy 35&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </>
  );
}
