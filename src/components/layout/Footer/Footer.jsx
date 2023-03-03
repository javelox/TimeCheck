import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 w-full bg-white sm:p-6 dark:bg-black mt-48 border-t-4 border-emerald-700">
        <div className=" md:flex md:justify-between">
          <div className="flex gap-2 text-center justify-center items-center  mb-6 md:mb-0 ">
            <img
              src="/logoTimecheck.png"
              alt=""
              className="h-8 "
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white xl:text-3xl">
              Time Check
            </span>
            
          </div>
          <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white xl:text-base">
                Sobre nosotros
              </h2>
              <p className="text-gray-400 w-40 text-sm">
                Lorem ipsum dolor amet consectetur adipisicing elit.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white xl:text-base">
                Legalidad
              </h2>
              <ul className="text-gray-600 text-sm dark:text-gray-400 xl:text-base  ">
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
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-green-500 lg:my-8 w-full" />
        <div className="sm:flex text-center sm:items-center sm:justify-between ">
          <span className="text-base text-center items-center justify-center text-white sm:text-center dark:text-gray-300 xl:text-base">
            &copy; 2022 . Todos los derechos reservados.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
