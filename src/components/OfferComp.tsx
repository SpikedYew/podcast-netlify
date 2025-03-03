import { Mic, Clapperboard, BadgeCheck } from "lucide-react";
// import { useState } from "react";

const iconsData: Data[] = [
  {
    icon: Mic,
    text: "Nagraj Audio",
    desc: "Nagrywamy profesjonalne ścieżki dźwiękowe w wysokiej jakości. Oferujemy czyste, dobrze brzmiące nagrania, bez zbędnych szumów i zakłóceń. Możemy również zadbać o edycję dźwięku i mastering, aby Twój podcast brzmiał profesjonalnie.",
    price: "280",
  },
  {
    icon: Clapperboard,
    text: "Nagraj Video",
    desc: "Nagrywamy wideo w jakości 4K, zapewniając doskonały obraz. Profesjonalne oświetlenie, kadrowanie i edycja pozwalają uzyskać wysokiej klasy materiał, który świetnie sprawdzi się na YouTube lub innych platformach.",
    price: "580",
  },
  {
    icon: BadgeCheck,
    text: "Gotowy Podcast",
    desc: "Kompleksowa usługa – nagranie, montaż i pełna postprodukcja. Otrzymujesz gotowy podcast w wersji audio i wideo, zmontowany, poprawiony pod względem dźwięku i obrazu, gotowy do publikacji. Możemy dodać intro, outro, efekty dźwiękowe i napisy.",
    price: "1000",
  },
];
interface Data {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
  desc: string;
  price: string;
}

export default function OfferComp() {
  //   const [size, setSize] = useState<Boolean>(true);
  return (
    <div className="min-h-[450px] flex flex-col lg:flex-row justify-around items-center w-full ">
      {iconsData.map((val, i) => {
        const IconComp = val.icon;
        return (
          <div
            // onMouseEnter={() => setSize(true)}
            // onMouseLeave={() => setSize(false)}
            className="w-lg min-w-[90vw] sm:min-w-[320px] transition-all hover:min-w-[380px] max-w-[260px] max-h-[500px] min-h-[500px] hover:min-h-[510px]  shadow-2xl shadow-[#01010141] p-10"
          >
            <IconComp className="h-10 w-10 mb-4" key={i}></IconComp>
            <h3 className="font-semibold text-2xl mb-3">{val.text}</h3>
            <p className="text-lg mb-2 text-gray-800">{val.desc}</p>
            <p className="text-lg text-black">od {val.price} zł</p>
            {/* <button className="w-full flex justify-center font-semibold mt-4 text-md ">
              <p className="w-fit transition-all bg-black hover:bg-white hover:text-black hover:shadow-[#01010141] hover:shadow-xl text-white p-2 rounded-md">
                Czytaj więcej
              </p>
            </button> */}
          </div>
        );
      })}
    </div>
  );
}
