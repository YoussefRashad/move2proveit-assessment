import React from 'react'
import { Link } from 'react-router-dom';

const NavItem = ({ to, title }) => {
    const stylelink = { color: 'inherit', textDecoration: 'inherit' };

    return (
        <Link style={stylelink} to={to}>
            <li className="navbar_li">{title}</li>
        </Link>
    )
}

export default NavItem
