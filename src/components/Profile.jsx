import React from 'react'
import './styles.css'
import Techs from './Techs'

const Profile = () => {
  return (
    <div className='d-flex flex-column align-items-center container-profile text-center'>
      <img src="./assets/profilepicblacksquare.jpg" alt="profile pic" className='profile-picture' />
      <h1><b>Hola, soy <span>Alexis</span></b></h1>
      <h4><i>Desarrollador web</i></h4>
      <p className='profile-text'>Mi pasión es crear sitios <b>responsivos, intuitivos y dinámicos. </b><br/>¡Te invito a conocer mi trabajo!</p>
      <h2 className='py-5'>TECNOLOGÍAS</h2>
      <div className='container d-flex flex-wrap justify-content-center align-items-center'>
        <Techs />
      </div>
    </div>
  )
}

export default Profile