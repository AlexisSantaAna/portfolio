import React, { useEffect } from "react"
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

  const notification = () => {
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
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    notification()
    e.target.reset()
  }

  return (
    <>
      <h2 className="pt-5" data-aos="fade-right" data-aos-duration="800">CONTACTO</h2>
      <div className="bar" data-aos="fade-left" data-aos-duration="800"></div>
      <h5 className="py-1 preguntas text-center" data-aos="fade-up" data-aos-duration="800"><i>¿Alguna pregunta o querés que <span>trabajemos juntos?</span></i></h5>
      <form name="contact2" netlify>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
      <form name="contact" method="POST" data-netlify="true" className="form" onSubmit={e => handleSubmit(e)} data-aos="fade-up" data-aos-duration="800">

        <div className="row">
          {/* name */}
          <div className="col-12 col-sm-6 d-flex flex-column">
            <label htmlFor="name"><b>Nombre completo</b></label>
            <input name="name" type="text" placeholder="Ingrese su nombre" id="name" required></input>
          </div>
          {/* email */}
          <div className="col-12 col-sm-6 d-flex flex-column">
            <label htmlFor="email"><b>Email</b></label>
            <input name="email" type="email" placeholder="Ingrese su email" id="email" required></input>
          </div>
        </div>
        <div className="row">
          {/* message */}
          <div className="col-12 d-flex flex-column">
            <label htmlFor="msg"><b>Mensaje</b></label>
            <textarea name="msg" id="msg" placeholder="Escriba su mensaje" style={{ resize: "none" }} rows="8" cols="20" required />
          </div>
        </div>
        <button type="submit" className="btn btn-dark my-2 w-100">Enviar!</button>
      </form>
    </>
  )
}

export default Contact