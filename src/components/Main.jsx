import './styles.css'

import Contact from './Contact'
import Profile from './Profile'
import Projects from './Projects'
import React from 'react'

const Main = () => {
    

    return (
        <main className='container container-main d-flex flex-column'>
            <Profile />
            <Projects />
            <Contact />
        </main>
    )
}

export default Main