import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <div className='navbar'>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='/about'>
                    About
                </NavLink>
                <NavLink to='/feedback'>
                   Feedback 
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar