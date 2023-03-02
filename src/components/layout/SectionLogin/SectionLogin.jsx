import React from 'react'
import { DivLogo } from '../../ui/DivLogo/DivLogo'
import { FormLogin } from '../FormLogin/FormLogin'


export const SectionLogin = () => {
  return (
    <section className='bg-teal-200 bg-opacity-30  h-fit m-5 border border-slate-600 rounded-lg shadow-lg shadow-slate-600'>
      <DivLogo/>
      <FormLogin/>
    </section>
  )
}
