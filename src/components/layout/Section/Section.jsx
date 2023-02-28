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
            <div class="content">
                <div class="image">
                    <img src="./img//undraw_dog_c7i6.svg" alt=""/>
                </div>
                <div class="text-box">
                <h2 className='p-2 text-emerald-700 text-2xl underline'>TimeCheck</h2>
                    <Paragraphs content= '¡Bienvenido a nuestra aplicación de control de asistencia a eventos!  Nuestro objetivo es hacer que asistir a eventos sea una experiencia más agradable y sin estrés, por lo que esperamos que encuentres nuestra aplicación útil y fácil de usar. ¡Disfruta del evento!'/>
                </div>
            </div>
      <hr className='border-b my-8 bg-emerald-700' />
    </section>
    // </ScrollReveal>
  )
}
