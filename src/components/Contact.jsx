import React from 'react'
import './styles.css'
import Swal from 'sweetalert2'
import 'animate.css';

const Contact = () => {

  const notification = () => {
    Swal.fire({
      toast: true,
      position: "bottom-end",
      icon: "success",
      iconColor: "#4da4ea",
      title: `Mensaje enviado con éxito!`,
      showConfirmButton: false,
      timer: 4000,
      showClass: {
        popup: 'animate__animated animate__fadeInUp'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutDown'
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    notification()
    e.target.reset()
  }



  return (
    <>
      <h2 className='pt-5'>CONTACTO</h2>
      <h5 className='py-1 preguntas'><i>¿Alguna pregunta o querés que <span>trabajemos juntos?</span></i></h5>
      <form className='form' onSubmit={e => handleSubmit(e)}>
        <div className='row'>
          <div className='col-6 d-flex flex-column'>
            <label htmlFor='name'><b>Nombre completo</b></label>
            <input type="name" placeholder="Ingrese su nombre" id='name' required></input>
          </div>
          <div className='col-6 d-flex flex-column'>
            <label htmlFor='email'><b>Email</b></label>
            <input type="email" placeholder="Ingrese su email" id='email' required></input>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 d-flex flex-column'>
            <label htmlFor="msg"><b>Mensaje</b></label>
            <textarea id='msg' placeholder='Escriba su mensaje' style={{ resize: "none" }} rows="8" cols="20" required />
          </div>
        </div>
        <button type='submit' className='btn btn-dark my-2 w-100'>Enviar!</button>
      </form>
    </>
  )
}

export default Contact