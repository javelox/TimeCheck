import React from 'react'
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import { Link } from "react-router-dom";

export const ListNavbar = () => {
  return (
    <ul className='flex items-center h-11'>
      <li className='text-emerald-700 text-2xl relative left-3'><Link to="/"><BsFillArrowLeftCircleFill/></Link></li>
      <li className='relative left-1/4 text-2xl font-thin'>Iniciar Sesión</li>
    </ul>
  )
}
