import { useEffect, useState } from "react";

export interface DarkMode {
  darkMode: boolean;
}

export default function Oferta() {
  const [data, setData] = useState<string[][]>([]);

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vSZMkfGS_gdQmKRjZOaF7yvysVHnn6Qa0nHElhIzJz2MjOfgPAIGqG0f-6QaeYO9tktiB3FkVN6qNFG/pub?output=tsv"
    )
      .then((res) => res.text())
      .then((text) => {
        const rows = text
          .trim()
          .split("\n")
          .map((row) => row.split("\t"));
        setData(rows);
      })
      .catch((err) => console.error(`Error fetching data ${err}`));
  }, []);

  return (
    <>
      {" "}
      <section className="text-dark dark:text-[#f6f6f6] mt-10 mb-10 mx-auto flex-col flex max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl ">
        <h1 className="text-4xl mb-4 font-semibold  pl-6">Nagrywanie 🎤</h1>
        <hr />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <thead className=" rounded-sm text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Cennik netto
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 1h
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 3h
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 6h
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Audio
                </th>

                {data[0]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Audio + Video
                </th>
                {data[1]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio
                </th>
                {data[2]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio + Wideo
                </th>
                {data[3]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="relative overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <thead className="rounded-sm text-gray-700 uppercase shadow-xl shadow-purple dark:shadow-[#bbbbbb17] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {data[0]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(1).map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`border-b ${
                    rowIndex % 2 === 0
                      ? "bg-white dark:bg-gray-800"
                      : "bg-gray-50 dark:bg-gray-700"
                  } dark:border-gray-700 border-gray-200`}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-6 py-4 ${
                        cellIndex === 0
                          ? "font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          : ""
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <h1 className="text-4xl mb-4 font-semibold pl-6">Wizerunek 👀</h1>
        <hr />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <thead className=" rounded-sm text-gray-700 uppercase shadow-xl shadow-purple dark:shadow-[#bbbbbb17] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Cennik netto
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 1h
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 3h
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 6h
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Audio
                </th>
                <td className="px-6 py-4">280 zł</td>
                <td className="px-6 py-4">714 zł</td>
                <td className="px-6 py-4">1260 zł</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Audio + Video
                </th>
                <td className="px-6 py-4">580 zł</td>
                <td className="px-6 py-4">1479 zł</td>
                <td className="px-6 py-4">2610 zł</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio
                </th>
                <td className="px-6 py-4">560 zł</td>
                <td className="px-6 py-4">1680 zł</td>
                <td className="px-6 py-4">3360 zł</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio + Wideo
                </th>
                <td className="px-6 py-4">1110 zł</td>
                <td className="px-6 py-4">2830 zł</td>
                <td className="px-6 py-4">4990 zł</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-4xl mb-4 font-semibold  pl-6">Dodatki 🤝</h1>
        <hr />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <thead className=" rounded-sm text-gray-700 uppercase shadow-xl shadow-purple dark:shadow-[#bbbbbb17] dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Cennik netto
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 1h
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 3h
                </th>
                <th scope="col" className="px-6 py-3">
                  Cena za 6h
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Audio
                </th>
                <td className="px-6 py-4">280 zł</td>
                <td className="px-6 py-4">714 zł</td>
                <td className="px-6 py-4">1260 zł</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Audio + Video
                </th>
                <td className="px-6 py-4">580 zł</td>
                <td className="px-6 py-4">1479 zł</td>
                <td className="px-6 py-4">2610 zł</td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio
                </th>
                <td className="px-6 py-4">560 zł</td>
                <td className="px-6 py-4">1680 zł</td>
                <td className="px-6 py-4">3360 zł</td>
              </tr>
              <tr className="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio + Wideo
                </th>
                <td className="px-6 py-4">1110 zł</td>
                <td className="px-6 py-4">2830 zł</td>
                <td className="px-6 py-4">4990 zł</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
