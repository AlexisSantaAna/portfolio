import React, { useEffect } from 'react'
import Carousel from './Carousel'
import './styles.css'
import Swal from 'sweetalert2'
import 'animate.css'
import AOS from 'aos';
import "aos/dist/aos.css";

// Data Base
const proyectos = [
    {
        nombre: "Star App",
        url: "https://drive.google.com/file/d/1M4WeoZYm4MeLzahpzfU3GH86gBdlLSXE/view",
        github: "https://github.com/AlexisSantaAna/star-wars-characters",
        info: "Star App es un proyecto realizado para Coderhouse en React Native, Expo, Firebase, Redux, SQLite, API Rest. El despliegue fue realizado para Android, incluyo el instalador para su prueba y ejecución.",
        img: "assets/pics/sa"
    },
    {
        nombre: "Gaming Store",
        url: "https://alexissantaana-gaming-store.netlify.app/",
        github: "https://github.com/AlexisSantaAna/gaming-store",
        info: "Gaming Store (e-commerce) realizado para Coderhouse en ReactJS, Bootstrap, Vanilla JS & Firebase. Bibliotecas: react-router-dom, react-helmet, react-hook-form, Atropos.",
        img: "assets/pics/gs"
    },
    {
        nombre: "Comic Store",
        url: "https://alexissantaana.github.io/comic-store/",
        github: "https://github.com/AlexisSantaAna/comic-store",
        info: "Sitio web ficticio de carrito de compras basado en una tienda de cómics. Proyecto en HTML, CSS, Bootstrap, Vanilla JS (usando variables, bucles, condicionales, objetos, funciones, almacenamiento local, promesas, bibliotecas, etc.)",
        img: "assets/pics/cs"
    },
    {
        nombre: "IDeArSe",
        url: "https://idearse.netlify.app/",
        github: "https://github.com/AlexisSantaAna/IDeArSe",
        info: "Sitio web realizado para IDeArSe en HTML, CSS, Bootstrap, Vanilla JS. IDeArSe es una ONG de Guaymallén, Mendoza, Argentina, una escuela de artes y deportes con la colaboración de grupos de Boy Scouts de Mendoza.",
        img: "assets/pics/ide"
    },
    {
        nombre: "Cinelista",
        url: "https://alexissantaana.github.io/cinelista/",
        github: "https://github.com/AlexisSantaAna/cinelista",
        info: "Guarda de forma sencilla aquellas películas que quieres ver y no tienes donde apuntarlas. Proyecto en HTML, CSS, Bootstrap y Vanilla JS.",
        img: "assets/pics/cl"
    },
    {
        nombre: "Cavas Don Alexis",
        url: "https://alexissantaana.github.io/cavas-don-alexis/",
        github: "https://github.com/AlexisSantaAna/cavas-don-alexis",
        info: "Proyecto web de bodega realizado para Coderhouse en HTML, CSS, Bootstrap, Sass & Vanilla JS.",
        img: "assets/pics/cda"
    },
    {
        nombre: "Thanos Portfolio",
        url: "https://alexissantaana.github.io/Thanos-Portfolio/",
        github: "https://github.com/AlexisSantaAna/Thanos-Portfolio",
        info: "Sitio web de portafolio ficticio basado en el personaje de Marvel 'Thanos'. Proyecto en HTML, CSS, Bootstrap y Vanilla JS",
        img: "assets/pics/tp"
    }
]

const Cards = () => {

    //AOS library
    useEffect(() => {
        AOS.init({ once: true });
        AOS.refresh();
    }, []);

    const handleInfo = (info, nombre) => {
        //Sweet Alert 2 library
        Swal.fire({
            title: nombre,
            text: info,
            icon: 'info',
            confirmButtonText: 'CERRAR',
            confirmButtonColor: "#353839",
            iconColor: "#4da4ea",
            showClass: {
                popup: "animate__faster animate__animated animate__zoomIn",
                backdrop: 'swal2-backdrop-show',
                icon: 'swal2-icon-show'
            }
        })
    }

    return (
        <>
            <div className='container row d-flex justify-content-center align-items-center pb-5'>
                {
                    proyectos.map((proyecto, index) => (
                        <div key={index} className='col g-5 d-flex justify-content-center align-items-center flex-column single-card' data-aos="fade-up" data-aos-duration="800">
                            <h4 className='card-title'>{proyecto.nombre}</h4>
                            <Carousel proyecto={proyecto} index={index} />
                            <div>
                                <a href={proyecto.url} target="_blank"><button className='btn btn-dark'>WEB</button></a>
                                <a href={proyecto.github} target="_blank"><button className='btn btn-dark'>GITHUB</button></a>
                                <button className='btn btn-dark info' onClick={() => handleInfo(proyecto.info, proyecto.nombre)}>INFO</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cards
