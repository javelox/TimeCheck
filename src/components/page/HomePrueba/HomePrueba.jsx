import axios from 'axios'
import React,{useEffect} from 'react'
import { apiHomePru } from '../../utils/ApiRest'

export const HomePrueba = () => {
    useEffect(() =>{
        axios.get(apiHomePru,{
            withCredentials: true,
        })
        .then((response) => console.log(response))
        .catch((err) =>console.log(err))
    },[])
  return (
    <div>Bienvenido usuario auntenticado</div>
  )
}
