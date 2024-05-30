import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <NavLink to="/">Logo</NavLink>
                </div>
                <div className="navbar-links">
                    <ul className={isOpen ? "active" : ""}>
                        <li>
                            <NavLink to="/" activeClassName="active" onClick={toggleNav}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog" activeClassName="active" onClick={toggleNav}>Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" activeClassName="active" onClick={toggleNav}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName="active" onClick={toggleNav}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-toggle" onClick={toggleNav}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
