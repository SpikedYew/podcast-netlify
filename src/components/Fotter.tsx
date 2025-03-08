import { Link } from "react-router-dom";

export default function Fotter() {
  return (
    <>
      <hr />
      <div className="bg-light text-dark dark:text-light dark:bg-dark p-4 bottom-0  w-full mx-auto ">
        <div className="container mx-auto text-sm md:text-md flex justify-between h-[100px] w-[300px] md:w-[400px]">
          <div>
            <ul className="flex flex-col justify-center ">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/studio" className="hover:underline">
                  Studio
                </Link>
              </li>
              <li>
                <Link to="/o-nas" className="hover:underline">
                  O nas
                </Link>
              </li>
              <li>
                <Link to="/oferta" className="hover:underline">
                  Oferta
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:underline">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col justify-center ">
              <li>
                <a
                  href="https://www.instagram.com/bartoszchmieleckiweb/"
                  target="_blank"
                  className="hover:underline"
                >
                  Bartosz Chmielecki
                </a>
              </li>
              <li>
                <a
                  href="https://mfcstudio.pl/"
                  target="_blank"
                  className="hover:underline"
                >
                  Paweł Glosz
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/wawrzynekpawel/"
                  target="_blank"
                  className="hover:underline"
                >
                  Paweł Wawrzynek
                </a>
              </li>
              <li>
                <a className="hover:underline" href="tel:48533320515">
                  {" "}
                  tel: +48 533 320 515
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/polityka-prywatnosci">
                  {" "}
                  Polityka Prywatności
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-sm md:text-md text-center mt-4 mb-4">
        <p className="text-dark dark:text-light">
          &copy; {new Date().getFullYear()} Studio Uszko
        </p>
      </div>
    </>
  );
}
