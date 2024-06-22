import { Container, Row, Col } from "react-bootstrap";
import Logo from "../Images/logo.png";
import Instagram from '../socials/instagram.svg';
import TikTok from '../socials/tiktok.svg';
import YouTube from '../socials/youtube.svg';
import LinkedIn from '../socials/linkedin.svg';
import "../App.css";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={Logo} alt="Logo" className="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.instagram.com/gabby.designstudio/"><img src={Instagram} alt=""/></a>
              <a href="https://www.tiktok.com/@gabby.designstudio?lang=en"><img src={TikTok} alt=""/></a>
              <a href="https://www.youtube.com/@kuppysanimation3332"><img src={YouTube} alt=""/></a>
              <a href="https://www.linkedin.com/in/gabrielle-franco/"><img src={LinkedIn} alt=""/></a>              
            </div>
            <p>© 2024 Gabby's Design Studio</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}