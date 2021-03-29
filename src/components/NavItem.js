import React from 'react'
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, title }) => {
    const stylelink = { color: 'inherit', textDecoration: 'inherit' };

    return (
        <NavLink style={stylelink} to={to}>
            <li className="navbar_li">{title}</li>
        </NavLink>
    )
}

export default NavItem
