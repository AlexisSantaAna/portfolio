import React from 'react'
import './styles.css'

const Contact = () => {
  return (
    <>
      <h2 className='pt-5'>CONTACTO</h2>
      <h5 className='py-1 preguntas'><i>¿Alguna pregunta o querés que <span>trabajemos juntos?</span></i></h5>
      <form className='form'>
        <div className='row'>
          <div className='col-6 d-flex flex-column'>
            <label htmlFor='name'><b>Nombre completo</b></label>
            <input type="name" placeholder="Ingrese su nombre" id='name'></input>
          </div>
          <div className='col-6 d-flex flex-column'>
            <label htmlFor='email'><b>Email</b></label>
            <input type="email" placeholder="Ingrese su email" id='email'></input>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 d-flex flex-column'>
            <label htmlFor="msg"><b>Mensaje</b></label>
            <textarea id='msg' placeholder='Escriba su mensaje' style={{resize: "none"}} rows="8" cols="20"/>
          </div>
        </div>
        <button type='submit' className='btn btn-dark my-2 w-100'>Enviar!</button>
      </form>
    </>
  )
}

export default Contact