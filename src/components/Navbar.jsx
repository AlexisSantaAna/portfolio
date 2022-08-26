import './styles.css'

import Icons from './Icons'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='container-fluid container-nav'>
            <div className='container icons d-flex justify-content-end align-items-center'>
                <Icons />
            </div>
        </nav>
    )
}

export default Navbar