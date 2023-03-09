import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { apiHomePru } from '../../utils/ApiRest'
import { toast } from 'react-toastify';


export const HomePrueba = () => {

  const showAlerts = useCallback(() => {
    axios.get(apiHomePru, {
      withCredentials: true,
    })
      .then((response) => console.log(response))
      .catch((err) => {
        alert(err.response.data.message)
        toast.error(err.response.data.message)
      })
  }, []);

  useEffect(() => {
    showAlerts();
  }, [showAlerts])
  return (
    <>
      <div>Bienvenido usuario auntenticado</div>

    </>
  )
}
