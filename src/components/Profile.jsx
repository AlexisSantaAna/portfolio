import React from 'react'
import './styles.css'

const Profile = () => {
  return (
    <div className='d-flex flex-column align-items-center container-profile'>
      <img src="./assets/profilepicblacksquare.jpg" alt="profile pic" className='profile-picture' />
      <h2><b>Hola, soy <span>Alexis</span></b></h2>
      <h5><i>Desarrollador web</i></h5>
      <p>Me especializo en las siguientes tecnologías:</p>
    </div>
  )
}

export default Profile