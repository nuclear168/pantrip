import React from 'react'
import Navigation from './Navigation';

const Navbar = ({ children }) => {

    return (
        <div>
            <Navigation />
            {children}
        </div>
    )
}

export default Navbar