import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 w-full bg-white sm:p-6 dark:bg-gray-900 mt-48">
        <div className=" md:flex md:justify-between">
          <div className="flex text-center justify-center items-center  mb-6 md:mb-0 ">
            <img
              src="/logoTimecheck.png"
              alt=""
              className="mr-3 h-8 xl:w-20 xl:h-20"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white xl:text-3xl">
              Time Check
            </span>
            -
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white xl:text-base">
                Sobre nosotros
              </h2>
              <p className="text-gray-400 w-40 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white xl:text-base">
                Legalidad
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 xl:text-base">
                <li className="mb-4">
                  <Link href="#" className="text-slate-400 hover:underline">
                    Políticas de seguridad
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:underline">
                    Terminos &amp; Condiciones
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex text-center sm:items-center sm:justify-between ">
          <span className="text-lg text-center items-center justify-center text-gray-500 sm:text-center dark:text-gray-400 xl:text-base">
            &copy; 2022 . Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
