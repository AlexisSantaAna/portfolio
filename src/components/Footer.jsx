import './styles.css'

import Icons from './Icons'
import React from 'react'

const Footer = () => {
    return (
        <footer className='container-fluid container-footer pt-4'>
            <div className='container icons d-flex justify-content-between align-items-center'>
                <div className='space'></div>
                <div>
                    <Icons />
                </div>
                <a href='#'><i class="fa-solid fa-arrow-up"></i></a>
            </div>
            <p className='text-center text-footer'>Alexis Santa Ana ©2022</p>
        </footer>
    )
}

export default Footer