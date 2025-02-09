import React from 'react'

export function About(){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto clear-start">
        <div>
            <img src="/yo.jpg" alt="" className='object-contain h-24 w-24 rounded-sm' />
        </div>
        <div className=''>
        <p className="text-sm text-gray-200" style={{ textAlign: 'justify', lineHeight: '22px' }}>
                Soy Kerwin Angeles Flores, un desarrollador <span style={{color: '#FACC15'}}> Frontend Developer </span> apasionado por la tecnología y la creación de soluciones innovadoras. 
                Tengo experiencia trabajando en una empresa de seguros, donde desarrollo nuevas funcionalidades para su sistema web, optimizando flujos de trabajo. 
                Además, tengo experiencia trabajando con clientes para desarrollar sistemas web a medida. Actualmente, estoy estudiando en el Instituto Tecnológico de las Américas (ITLA), donde sigo ampliando mis conocimientos y habilidades en desarrollo de software.
            </p>
        </div>
    </div>
  )
}
