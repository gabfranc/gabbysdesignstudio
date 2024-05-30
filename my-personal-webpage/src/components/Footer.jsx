import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Gabby. All rights reserved.</p>
            <p>Follow me on 
               <a href="https://www.linkedin.com/in/gabrielle-franco/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> 
               <a href="https://github.com/gabfranc" target="_blank" rel="noopener noreferrer"> GitHub</a>
               <a href="https://www.instagram.com/gabby.designstudio/" target="_blank" rel="noopener noreferrer"> Instagram</a>
            </p>
        </footer>
    );
};

export default Footer;
