import React from 'react'
import './styles.css'
import Techs from './Techs'

const Profile = () => {
  return (
    <div className='d-flex flex-column align-items-center container-profile text-center'>
      <img src="./assets/profilepicblacksquare.jpg" alt="profile pic" className='profile-picture' />
      <h1 className='animate__slow animate__animated animate__fadeInDown'><b>Hola, soy <span>Alexis</span></b></h1>
      <h4 className='animate__delay-1s animate__slow animate__animated animate__fadeIn'><i>Desarrollador web</i></h4>
      <p className='profile-text animate__slow animate__animated animate__fadeInUp'>Mi pasión es crear sitios <b>responsivos, intuitivos y dinámicos. </b><br/>¡Te invito a conocer mi trabajo!</p>
      <h2 className='animate__slow animate__animated animate__fadeInUp'>TECNOLOGÍAS</h2>
      <div className='animate__slow animate__animated animate__fadeInUp bar'></div>
      <div className='container d-flex flex-wrap justify-content-center align-items-center animate__slow animate__animated animate__fadeInUp'>
        <Techs />
      </div>
    </div>
  )
}

export default Profile