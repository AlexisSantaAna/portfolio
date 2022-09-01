import './styles.css'

import Icons from './Icons'
import React, { useContext } from 'react'
import ReactSwitch from 'react-switch'
import { ThemeContext } from '../App'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className='container-fluid container-nav'>
            <div className='container icons d-flex justify-content-end align-items-center'>
                <div className='switch'>
                    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"}/>
                </div>
                <Icons />
            </div>
        </nav>
    )
}

export default Navbar