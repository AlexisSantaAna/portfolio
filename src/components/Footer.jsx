import './styles.css'

import Icons from './Icons'
import React from 'react'

const Footer = () => {
    return (
        <footer className='container-fluid container-footer pt-4'>
            <div className='container icons d-flex justify-content-center align-items-center'>
                <Icons />
            </div>
        </footer>
    )
}

export default Footer