import { useEffect, useState } from "react";
import { Video, Crop, Plus } from "lucide-react";

export interface DarkMode {
  darkMode: boolean;
}

export default function Oferta({ darkMode }: DarkMode) {
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
        <h1 className="text-4xl mb-4 font-semibold flex items-center pl-6">
          Nagrywanie{" "}
          <Video size={35} className="ml-4 dark:text-light text-dark " />
        </h1>
        <hr />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <thead className=" rounded-sm text-gray-700 uppercase   dark:text-gray-200">
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
              <tr className=" border-b  dark:border-gray-700 border-gray-200">
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
              <tr className="border-b  dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  Audio + Video
                </th>
                {data[1]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className=" border-b  dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio
                </th>
                {data[2]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className="">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
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

        <h1 className="text-4xl mb-4 font-semibold flex items-center pl-6">
          Wizerunek{" "}
          <Crop size={35} className="ml-4 dark:text-light text-dark " />
        </h1>
        <hr />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <thead className=" rounded-sm text-gray-700 uppercase   dark:text-gray-200">
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
              <tr className=" border-b  dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Gotowy materiał
                </th>

                {data[4]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className="border-b  dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  Automatyzacja
                </th>
                {data[5]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className=" border-b  dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio
                </th>
                {data[6]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className="">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio + Wideo
                </th>
                {data[7]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-4xl mb-4 font-semibold flex items-center pl-6">
          Dodatki <Plus size={35} className="ml-4 dark:text-light text-dark " />
        </h1>
        <hr />
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm md:text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <thead className=" rounded-sm text-gray-700 uppercase   dark:text-gray-200">
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
              <tr className=" border-b  dark:border-gray-700 border-gray-200">
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
              <tr className="border-b  dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  Audio + Video
                </th>
                {data[1]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className=" border-b  dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
                >
                  Montaz Audio
                </th>
                {data[2]?.map((header, i) => (
                  <td key={i} scope="col" className="px-6 py-3">
                    {header} zł
                  </td>
                ))}
              </tr>
              <tr className="">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap dark:text-white"
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
      </section>
    </>
  );
}
