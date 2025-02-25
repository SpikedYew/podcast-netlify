export interface DarkMode {
  darkMode: boolean;
}

export default function Oferta({ darkMode }: DarkMode) {
  return (
    <>
      {" "}
      <section className="text-dark dark:text-[#f6f6f6] mt-10 mb-10 mx-auto flex-col flex max-w-[90vw] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl ">
        <h1 className="text-4xl mb-4 pl-6">Nagrywanie</h1>
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
        <h1 className="text-4xl mb-4 pl-6">Wizerunek</h1>
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
        <h1 className="text-4xl mb-4 pl-6">Wizerunek</h1>
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
