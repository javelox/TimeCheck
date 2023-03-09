import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiLogin } from '../../utils/ApiRest'
import {FcGoogle } from 'react-icons/fc'
import {GrFacebook } from 'react-icons/gr'
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [claseSpanCorreo, setClaseSpanCorreo] = useState("placeholder");
  const [claseSpanContraseña, setClaseSpanContraseña] = useState("placeholder");

  useEffect(() => {
    if (values.email !== "" ) {
      setClaseSpanCorreo("up_correo");
    } else {
      setClaseSpanCorreo("placeholder");
    }
    if (values.password !== "") {
      setClaseSpanContraseña("up_contraseña");
    }else{
      setClaseSpanContraseña("placeholder");
    }
  }, [values]);

  const handleChange = (e) =>{
    const {name, value} = e.target
    setValues({
      ...values,
      [name] : value
    })
  }

  const handleSubmit = async(e) =>{
    e.preventDefault();
    await axios.post(apiLogin, values,{
      withCredentials: true
    })
    .then((response) => {
      console.log(response);
      alert("exito")
    })
    .catch((err) => {
      console.log(err)
      alert("error")
    })
  }
  return (
    <div className="mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-14 input-container relative w-full">
          <input
            type="email"
            name="email"
            className="text-base text-zinc-600 border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
            value={values.email}
            onChange={handleChange}
          />
          <span className={claseSpanCorreo}>Correo electronico...</span>
        </div>
        <div className="flex justify-center mt-10 input-container relative w-full">
          <input
            type="password"
            name="password"
            className="border-b border-black bg-transparent focus:outline-none w-60 pl-1"
            placeholder=""
            value={values.password}
            onChange={handleChange}
          />
          <span className={claseSpanContraseña}>Contraseña...</span>
        </div>
        <div className="flex justify-center">
          <button className="bg-black text-white py-1 px-14 rounded-md mt-10 hover:bg-slate-900 ">
            Iniciar
          </button>
        </div>
      </form>

      <div className="flex flex-row justify-center mt-8">
        <div className="relative bottom-3 border-b-2 border-black w-24"></div>
        <p className="mx-3">or</p>
        <div className="relative bottom-3 border-b-2 border-black w-24"></div>
      </div>

      <div className="flex flex-col text-center justify-center mt-8 text-slate-400">
        <p>Registrate con las redes sociales</p>
        <div className="flex text-center justify-center text-4xl gap-12 relative top-8">
          <FcGoogle/>
          <GrFacebook color="blue"/>
        </div>
      </div>

      <div className="flex justify-center flex-col text-center mt-16 text-slate-400">
        <p>¿No tienes cuenta? <Link to="/Register"><strong className="text-slate-700 underline hover:text-slate-500">Registrate</strong></Link></p>
        <p className="mt-4">¿Se te olvidó la contraseña? <strong className="text-slate-700 underline hover:text-slate-500">Recuperála</strong></p>
      </div>

    </div>
  );
};
