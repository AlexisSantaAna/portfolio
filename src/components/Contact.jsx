import React, { useEffect, useState } from "react"
import "./styles.css"
import Swal from "sweetalert2"
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  //AOS library
  useEffect(() => {
    AOS.init({ once: true });
    AOS.refresh();
  }, []); 

  useEffect(() => {
    if (sessionStorage.getItem("submited")) {
      //Sweet Alert 2 library
      Swal.fire({
        toast: true,
        position: "bottom-end",
        icon: "success",
        iconColor: "#4da4ea",
        title: `Mensaje enviado con éxito!`,
        showConfirmButton: false,
        timer: 4000,
        showClass: {
          popup: "animate__animated animate__fadeInUp"
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutDown"
        }
      });
      sessionStorage.removeItem("submited")
    }
  }, [])

  const handleSubmit = () => {   
    sessionStorage.setItem("submited", true)
  }

  return (
    <>
      <h2 className="pt-5" data-aos="fade-right" data-aos-duration="800">CONTACTO</h2>
      <div className="bar" data-aos="fade-left" data-aos-duration="800"></div>
      <h5 className="py-1 preguntas text-center" data-aos="fade-up" data-aos-duration="800"><i>¿Alguna pregunta o querés que <span>trabajemos juntos?</span></i></h5>
      <form action="/" name="contact" method="POST" data-netlify="true" className="form" onSubmit={(e) => handleSubmit(e)} data-aos="fade-up" data-aos-duration="800">
        <div className="row">
          {/* hidden input */}
          <input type="hidden" name="form-name" value="contact" />
          {/* name */}
          <div className="col-12 col-sm-6 d-flex flex-column">
            <label htmlFor="name"><b>Nombre completo</b></label>
            <input name="name" type="text" placeholder="Ingrese su nombre" id="name" required />
          </div>
          {/* email */}
          <div className="col-12 col-sm-6 d-flex flex-column">
            <label htmlFor="email"><b>Email</b></label>
            <input name="email" type="email" placeholder="Ingrese su email" id="email" required />
          </div>
        </div>
        <div className="row">
          {/* message */}
          <div className="col-12 d-flex flex-column">
            <label htmlFor="msg"><b>Mensaje</b></label>
            <textarea name="msg" id="msg" placeholder="Escriba su mensaje" style={{ resize: "none" }} rows="8" cols="20" required />
          </div>
        </div>
        <button type="submit" className="send-btn btn btn-dark my-2 w-100">Enviar!</button>
      </form>
    </>
  )
}

export default Contact