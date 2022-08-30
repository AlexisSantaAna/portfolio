import React from 'react'
import Cards from './Cards'
import './styles.css'

const Projects = () => {
  return (
    <>
      <h2 data-aos="fade-right"  data-aos-duration="800">MIS PROYECTOS</h2>
      <div className='bar' data-aos="fade-left" data-aos-duration="800"></div>
      <Cards />
    </>
  )
}

export default Projects