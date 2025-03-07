export interface DarkMode {
  darkMode: boolean;
}

export default function ContactHome({ darkMode }: DarkMode) {
  return (
    <>
      <div className="max-w-[92vw] sm:max-w-6xl mt-12 mb-12 mx-auto">
        <h1 className="text-2xl font-bold text-dark mb-8 dark:text-light text-center">
          Kontakt
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 text-dark dark:text-light">
          <div className="p-10">
            <h1 className="text-xl font-bold mb-4">Zadzwoń do nas!</h1>
            <div className="flex justify-between mb-2">
              <h2>Bartosz Chmielecki</h2>
              <p className=" text-sm md:text-base dark:text-gray-200 text-gray-750 hover:underline text-center md:text-left">
                <a href="tel:48533 320 515">+48 533 320 515</a>
              </p>
            </div>
            <div className="flex justify-between mb-2">
              <h2>Paweł Glosz</h2>
              <p className=" text-sm md:text-base dark:text-gray-200 text-gray-750 hover:underline text-center md:text-left">
                <a href="tel:48605 508 340">+48 605 508 340</a>
              </p>
            </div>
            <div className="flex justify-between mb-2">
              <h2>Paweł Wawrzynek</h2>
              <p className=" text-sm md:text-base dark:text-gray-200 text-gray-750 hover:underline text-center md:text-left">
                <a href="tel:48790504071">+48 790 504 071</a>
              </p>
            </div>
            <h1 className="text-xl font-bold mb-4">Napisz do nas!</h1>
            <div className="flex justify-between mb-2">
              <h2>Studio</h2>
              <h2>kontakt@studiouszko.pl</h2>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              textAlign: "right",
              width: "100%",
              height: "400px",
            }}
          >
            <div
              className=""
              style={{
                overflow: "hidden",
                background: "none",
                width: "100%",
                height: "400px",
              }}
            >
              <iframe
                title="Google Map"
                className="gmap_iframe"
                style={{
                  width: "100%",
                  height: "400px",
                  border: "none",
                  filter: darkMode ? "invert(90%) hue-rotate(180deg)" : "",
                }}
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Zabrze Lompy 35&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
