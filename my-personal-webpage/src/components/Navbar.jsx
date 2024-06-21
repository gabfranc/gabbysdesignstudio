import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import LogoImg from '../Images/logo.png';
import Instagram from '../socials/instagram.svg';
import TikTok from '../socials/tiktok.svg';
import YouTube from '../socials/youtube.svg';
import LinkedIn from '../socials/linkedin.svg';
import '../App.css';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar className={`navbar ${scrolled ? 'scrolled' : ''}`} expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={LogoImg} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
              onSetActive={() => handleSetActiveLink('home')}
            >
              HOME
            </ScrollLink>
            <ScrollLink
              to="skills"
              smooth={true}
              duration={500}
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              onSetActive={() => handleSetActiveLink('skills')}
            >
              SKILLS
            </ScrollLink>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
              onSetActive={() => handleSetActiveLink('projects')}
            >
              PROJECTS
            </ScrollLink>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={Instagram} alt=""/></a>
              <a href="#"><img src={TikTok} alt=""/></a>
              <a href="#"><img src={YouTube} alt=""/></a>
              <a href="#"><img src={LinkedIn} alt=""/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}>
              <span>Let's Connect 😘</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
