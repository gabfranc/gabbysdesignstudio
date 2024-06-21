import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal } from "react-bootstrap";
import '../App.css';
import QuickFoodsImg from "../Images/foods.png";
import TaylorImg from "../Images/1989.jpg";
import TicTacToe from "../Images/tictactoe.png";
import CoffeeLoverImg from "../Images/CoffeeLover.png";
import MeatyMagic from "../Images/MeatyMagic.png";
import PetImg from "../Images/pet.png";
import CoffeeImg from "../Images/coffee.png";
import TastyTier from "../Images/TastyTier.png";

export const Projects = () => {
  const projects = [
    {
      title: "Quick Foods",
      description: "Quick Foods is a Recipe Library Website, that allows customers to search and create quick and easy recipes from scratch.",
      img: QuickFoodsImg,
      category: "Web Design",
      tools: ["Figma, Vue, Nuxt, Tailwind, CSS"],
      externalLink: "https://capstone-final-project-8ka2.vercel.app/"
    },
    {
      title: "1989(Taylor's Version) Art",
      description: "This is my interpretation of Taylor Swift's 1989(Taylor's Version).",
      img: TaylorImg,
      category: "Digital Arts",
      tools: ["Photoshop, Adobe Illustrator"]
    },
    {
      title: "Coffee Lover",
      description: "",
      img: CoffeeLoverImg,
      category: "Digital Arts",
      tools: ["Canva"]
    },
    {
      title: "Meaty Magic",
      description: "",
      img: MeatyMagic,
      category: "Digital Arts",
      tools: ["Canva"]
    },
    {
      title: "Tasty Tier",
      description: "",
      img: TastyTier,
      category: "Digital Arts",
      tools: ["Canva"]
    },
    {
      title: "Tic-Tac-Toe",
      description: "Tic-Tac-Toe is a simple game of Tic-Tac-Toe.",
      img: TicTacToe,
      category: "Web Design",
      tools: ["React, CSS"],
      externalLink: "https://tic-tac-toe-reactgame-six.vercel.app/"
    },
    {
      title: "Adopt Me",
      description: "Adopt Me is a pet shelter dedicated to providing care and shelter to rescue animals from around the world, offering them a safe haven until they find loving, permanent homes.",
      img: PetImg,
      category: "Web Design",
      tools: ["Figma"],
      externalLink: "https://www.figma.com/proto/3QwzKTuPg7pxeOz0LT2EKo/Webpage-Mockup?node-id=3-3&t=zlunM9h2O5t7YZLu-1&scaling=contain&content-scaling=fixed&page-id=0%3A1"
    },
        {
      title: "Coffee Time",
      description: "",
      img: CoffeeImg,
      category: "Digital Arts",
      tools: ["Canva"],
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(project => project.category === selectedCategory);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Feel free to go through my projects.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="All">
              <Nav variant="pills" className="justify-content-center custom-nav">
                {categories.map((category, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link eventKey={category} onClick={() => setSelectedCategory(category)}>
                      {category}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <Tab.Content>
                {categories.map((category, index) => (
                  <Tab.Pane eventKey={category} key={index}>
                    <Row>
                      {filteredProjects.map((project, index) => (
                        <Col key={index} md={4}>
                          <div className="proj-imgbx" onClick={() => handleImageClick(project.img)}>
                            <img src={project.img} alt={project.title} />
                            <div className="proj-txtx">
                              <h4>{project.title}</h4>
                              <span>{project.category}</span>
                              <p>{project.description}</p>
                              <p><strong>Tools:</strong> {project.tools.join(", ")}</p>
                              {project.externalLink && <a href={project.externalLink} target="_blank" rel="noopener noreferrer">View Project</a>}
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />
        </Modal.Body>
      </Modal>
    </section>
  );
};