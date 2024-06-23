import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import GabbyIMG from '../Images/Gabby.jpg';
import Instagram from '../socials/instagram.svg';
import TikTok from '../socials/tiktok.svg';
import YouTube from '../socials/youtube.svg';
import LinkedIn from '../socials/linkedin.svg';
import '../App.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "UX Designer", "Graphic Designer", "Digital Marketer"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center" id="banner">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>{`I'm a `}<span className="wrap">{text}</span></h1>
            <Button className='vvd' onClick={handleShowModal}>
              Let's Connect <ArrowRightCircle size={25} />
            </Button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={GabbyIMG} alt="HeaderImg" />
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} backdrop="true">
        <Modal.Header closeButton>
          <Modal.Title>Let's Connect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: <a href="mailto:gabrielleafranco@gmail.com">gabrielleafranco@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://www.instagram.com/gabby.designstudio/"><img src={Instagram} alt="Instagram" /></a>
            <a href="https://www.tiktok.com/@gabby.designstudio?lang=en"><img src={TikTok} alt="TikTok" /></a>
            <a href="https://www.youtube.com/@kuppysanimation3332"><img src={YouTube} alt="YouTube" /></a>
            <a href="https://www.linkedin.com/in/gabrielle-franco/"><img src={LinkedIn} alt="LinkedIn" /></a>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};
