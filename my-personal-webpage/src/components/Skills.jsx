import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import '../App.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const items = [
    { imgSrc: "https://images.pexels.com/photos/114907/pexels-photo-114907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Web Development" },
    { imgSrc: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg", title: "UX Design" },
    { imgSrc: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Graphic Design" },
    { imgSrc: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Digital Marketing" },
    { imgSrc: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", title: "Software Testing" }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Services</h2>
              <p>Here are the services that I will be offering.</p>
              <Carousel responsive={responsive} infinite={false} className="skills-slider">
                {items.map((item, index) => (
                  <div key={index} className={`item ${index < 3 ? 'circle' : 'rectangle'}`}>
                    <img src={item.imgSrc} alt="Image" />
                    <h5>{item.title}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

