import React from 'react'
import './styles.css'

const proyectos = [
    {
        nombre: "Gaming Store",
        url: "https://alexissantaana-gaming-store.netlify.app/",
        info: "Gaming Store (e-commerce) realizado para Coderhouse en ReactJS, Bootstrap, Vanilla JS & Firebase. Bibliotecas: react-router-dom, react-helmet, react-hook-form, Atropos."
    },
    {
        nombre: "Comic Store",
        url: "https://alexissantaana.github.io/comic-store/",
        info: "Sitio web ficticio de carrito de compras basado en una tienda de cómics. Proyecto en HTML, CSS, Bootstrap, Vanilla JS (usando variables, bucles, condicionales, objetos, funciones, almacenamiento local, promesas, bibliotecas, etc.)"
    },
    {
        nombre: "Comic Store",
        url: "https://alexissantaana.github.io/comic-store/",
        info: "Sitio web ficticio de carrito de compras basado en una tienda de cómics. Proyecto en HTML, CSS, Bootstrap, Vanilla JS (usando variables, bucles, condicionales, objetos, funciones, almacenamiento local, promesas, bibliotecas, etc.)"
    },
    {
        nombre: "Comic Store",
        url: "https://alexissantaana.github.io/comic-store/",
        info: "Sitio web ficticio de carrito de compras basado en una tienda de cómics. Proyecto en HTML, CSS, Bootstrap, Vanilla JS (usando variables, bucles, condicionales, objetos, funciones, almacenamiento local, promesas, bibliotecas, etc.)"
    },
    {
        nombre: "Comic Store",
        url: "https://alexissantaana.github.io/comic-store/",
        info: "Sitio web ficticio de carrito de compras basado en una tienda de cómics. Proyecto en HTML, CSS, Bootstrap, Vanilla JS (usando variables, bucles, condicionales, objetos, funciones, almacenamiento local, promesas, bibliotecas, etc.)"
    },
    {
        nombre: "Comic Store",
        url: "https://alexissantaana.github.io/comic-store/",
        info: "Sitio web ficticio de carrito de compras basado en una tienda de cómics. Proyecto en HTML, CSS, Bootstrap, Vanilla JS (usando variables, bucles, condicionales, objetos, funciones, almacenamiento local, promesas, bibliotecas, etc.)"
    }
]

const Cards = () => {
    return (
        <>
            <div className='container row d-flex justify-content-center align-items-center'>
                {
                    proyectos.map((proyecto, index) => (
                        <div className='col g-5 d-flex justify-content-center align-items-center flex-column single-card'>
                            <h4 className='card-title'>{proyecto.nombre}</h4>
                            <img src="./assets/gif2.gif" alt="gif" />
                            <div>
                                <button className='btn btn-dark'>PROYECTO</button>
                                <button className='btn btn-dark'>GITHUB</button>
                                <button className='btn btn-dark'>INFO</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Cards