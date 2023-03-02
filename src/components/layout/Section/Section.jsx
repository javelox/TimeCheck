import React from 'react'
import Paragraphs from '../../ui/Paragraphs/Paragraphs'
import ScrollReveal from 'scrollreveal';

export const Section = () => {
  
  ScrollReveal({ 
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 400
 });


ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: "left" });
  return (
    // <ScrollReveal>
    <section>
      <div className="content">
        <div class="image">
            {/* <img src="./img//undraw_dog_c7i6.svg" alt=""/> */}
        </div>
        <div class="text-box">
          <h2 className='p-2 text-emerald-700 text-2xl font-mono'>TimeCheck</h2>
            <Paragraphs content={`¡Bienvenido a nuestra aplicación de control de asistencia a eventos!  Nuestro objetivo es hacer que asistir a eventos sea una experiencia más agradable y sin estrés, por lo que esperamos que encuentres nuestra aplicación útil y fácil de usar. ¡Disfruta del evento!`}/>
        </div>
      </div>
      <hr className='border-b my-2 bg-emerald-' />
      <div className='flex flex-col gap-5 h-96'>
        <img src="/image1.svg" alt="image1" />
        <img src="/image2.svg" alt="image1" />
      </div>
      <hr className='border-b my-2 bg-emerald- mt-44'/>
      <div className='px-6'>
        <h2 className='text-emerald-600 text-xl underline'>Funciones Principales:</h2>
        <div className="">
          <ul className='flex flex-col px-5 py-1'>
            <li className=''>Creación de eventos</li>
            <li className=''>Comunicación con asistencia</li>
            <li className=''>Validación de asistencia</li>
            <li className=''>Registro de asistencia</li>
            <li className=''>Registro de teimpos</li>
            <li className=''>Creación de reportes</li>
          </ul>
        </div>
      </div>
    </section>
    // </ScrollReveal>
  )
}
