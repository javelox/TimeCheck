import React from 'react'
import { Section } from '../../layout/Section/Section'
import HeaderHome from '../../layout/Header/HeaderHome';


export const Home = () => {
  return (
    <>
      <HeaderHome />
      <div className='bg-gradient-to-b  from-gray-200 via-white to-gray-200 ... h-screen'>
        <Section />
      </div>
    </>
  )
}
