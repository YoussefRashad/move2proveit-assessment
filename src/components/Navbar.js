import React from 'react';
import '../css/Nav.css';
import NavItem from './NavItem';

function Navbar() {

  return (
    <nav className="navbar">
      <h3 className="logo">Mobile Shop Application</h3>
      <ul className="navbar_ul">
        <NavItem to="/" title="Home" /> 
        <NavItem to="/AddProduct" title="Add Product" /> 
      </ul>
    </nav>
  );
}
export default Navbar;
