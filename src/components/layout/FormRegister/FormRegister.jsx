import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const [values,] = useState({
    Text: '',
    email: ''
  })
  const [claseSpannombre, setClaseSpannombre] = useState("placeholder");
  const [claseSpancorreo, setClaseSpancorreo] = useState("placeholder");

  useEffect(() => {
    if (values.Text !== "" ) {
      setClaseSpannombre("");
    } else {
      setClaseSpannombre("placeholder");
    }
    if (values.email !== "") {
      setClaseSpancorreo("");
    }else{
      setClaseSpancorreo("placeholder");
    }
  }, [values]);

  return (
    <div className="mb-6">
      <form onSubmit="">
        <div className="flex justify-center mt-14 input-container relative w-full">
          <input
            type="text"
            name="text"
            className="text-base text-zinc-600 border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
          />
          <span className={claseSpannombre}>Nombre completo</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type="Email"
            name="Email"
            className="border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
          />
          <span className={claseSpancorreo}>Correo electronico</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type="checkbox"
            name=""
            className="w-10"
            placeholder=""
          />C.C
           <input
            type="checkbox"
            name=""
            className="w-10"
            placeholder=""
          />T.I
           <input
            type="checkbox"
            name=""
            className="w-10"
            placeholder=""
          />C.E
          <span className={claseSpannombre}>Tipo de documento</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type=""
            name=""
            className="border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
          />
          <span className={claseSpannombre}>Número de identificación</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type=""
            name=""
            className="border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
          />
          <span className={claseSpannombre}>Dirección residencial</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type=""
            name=""
            className="border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
          />
          <span className={claseSpannombre}>Contraseña</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type=""
            name=""
            className="border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
          />
          <span className={claseSpannombre}>Confirmar Contraseña</span>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white py-1 px-14 rounded-md mt-10 hover:bg-slate-900 ">
            Enviar
          </button>
        </div>
      </form>

      <div className="flex justify-center flex-col text-center mt-16 text-slate-400">
        <p>¿Ya tienes cuenta? <Link to="/Register"><strong className="text-slate-700 underline hover:text-slate-500">Inicia sesión</strong></Link></p>
      </div>

    </div>
  );
};
