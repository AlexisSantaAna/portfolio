import React from 'react'
import './styles.css'
import Techs from './Techs'

const Profile = () => {
  return (
    <div className='d-flex flex-column align-items-center container-profile'>
      <img src="./assets/profilepicblacksquare.jpg" alt="profile pic" className='profile-picture' />
      <h1><b>Hola, soy <span>Alexis</span></b></h1>
      <h4><i>Desarrollador web</i></h4>
      <p className='profile-text'>Me especializo en las siguientes tecnologías:</p>
      <div className='container d-flex flex-wrap justify-content-center align-items-center'>
          <Techs />   
      </div>
    </div>
  )
}

export default Profile