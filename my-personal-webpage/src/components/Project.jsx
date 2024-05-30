import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import ComicGadgetImg from './images/ComicGadget.png';
import BakeryArtImg from './images/BakeryArt.png';
import DecemberImg from './images/December.jpg';
import JaguarImg from './images/jaguar.jpg';
import PupImg from './images/PCafe.png';
import ElevenImg from './images/Eleven.jpg';
import PhotoOne from './images/PhotoOne.jpg';
import TrimacImg from './images/TWBanner.png';
import VacayModeImg from './images/VacayMode.png';
import TicTacToeImg from './images/TicTacToe.png';
import SerenityImg from './images/Serenity.png';
import RikkiImg from './images/Rikki.jpg';
import QuickFoodsImg from './images/quickfoods.png';
import MyImg from './images/mememe.jpg';
import UCImg from './images/UofCDesign.png';
import TaylorImg from './images/tvposter.png';

const projectData = [
    {
        id: 1,
        title: 'Comic Gadget Logo',
        description: 'Description of Project 1.',
        img: ComicGadgetImg,
        category: 'Graphic Design',
        tools: ['Adobe Illustrator'],
    },
    {
        id: 2,
        title: 'Bakery Art Mockup',
        description: 'Description of Project 2.',
        img: BakeryArtImg,
        category: 'Graphic Design',
        tools: ['Adobe XD', 'Adobe PhotoShop'],
    },
    {
        id: 3,
        title: 'Jaguar Web Banner',
        description: 'Web Banner Designed for Jaguar',
        img: JaguarImg,
        category: 'Graphic Design',
        tools: ['Adobe PhotoShop'],
    },
    {
        id: 4,
        title: 'YYC Farmers Market Social Media Mockup',
        description: 'Social Media mockup for YYC Farmers Market.',
        img: DecemberImg,
        category: 'Graphic Design',
        tools: ['Adobe PhotoShop'],
    },
    {
        id: 5,
        title: 'Puppuccino Cafe Logo',
        description: 'Logo created for Puppuccino Cafe Logo',
        img: PupImg,
        category: 'Graphic Design',
        tools: ['Adobe Illustrator'],
    },
    {
        id: 6,
        title: 'Eleven Fan Art',
        description: 'Fan Art of Eleven from Stranger Things',
        img: ElevenImg,
        category: 'Digital Arts',
        tools: ['Adobe Illustrator'],
    },
    {
        id: 7,
        title: 'Jasper Photo',
        description: 'Picture of Jasper, Alberta at Athabasca Falls. It is such a pretty view!',
        img: PhotoOne,
        category: 'Photography',
        tools: ['Adobe PhotoShop', 'Adobe LightRoom'],
    },
    {
        id: 8,
        title: 'Trimac Web Banner',
        description: 'Web Banner ReDesign for Trimac Transportation Inc.',
        img: TrimacImg,
        category: 'Graphic Design',
        tools: ['Adobe PhotoShop'],
    },
    {
        id: 9,
        title: 'Vacay Mode Website',
        description: 'Vacay Mode is a Travel Agency Website, which provides flight lovers a paradisiac memorable vacation.',
        img: VacayModeImg,
        category: 'Web Design',
        tools: ['HTML, CSS, Javascript'],
        externalLink: 'https://cpnt-260-a3.vercel.app/#'
    },
    {
        id: 10,
        title: 'Tic Tac Toe Game',
        description: 'Tic Tac Toe is a fun game where two players take turns putting their mark, either an X or an O, on a grid. The goal is to be the first to get three of your marks in a row, either horizontally, vertically, or diagonally. It is a simple game that is great for learning and playing with friends!',
        img: TicTacToeImg,
        category: 'Web Design',
        tools: ['CSS, React'],
        externalLink: 'https://tic-tac-toe-reactgame-six.vercel.app/'
    },
    {
        id: 11,
        title: 'Serenity Website',
        description: 'Serenity is a spa business that specializes in giving woman a relaxing experience',
        img: SerenityImg,
        category: 'Web Design',
        tools: ['Figma'],
        externalLink: 'https://www.figma.com/proto/3oVOapc0PEKhZFG7fv7cmw/Serenity-Mockup%2FMoodBoard?node-id=4-32&t=fke39lMSReAn5Coi-0&scaling=scale-down&page-id=0%3A1'
    },
    {
        id: 12,
        title: 'Rikki Chadwick Fan Art',
        description: 'This is a Fan art of a character from h2o just add water Rikki Chadwick.',
        img: RikkiImg,
        category: 'Digital Arts',
        tools: ['Photoshop, Adobe Illustrator'],
    },
    {
        id: 13,
        title: 'Quick Foods Website',
        description: 'Quick Foods is a Recipe Library Website, that allows customers to search and create quick and easy recipes from scratch.',
        img: QuickFoodsImg,
        category: 'Web Design',
        tools: ['Figma, Vue, Nuxt, Tailwind, CSS'],
        externalLink: 'https://capstone-final-project-8ka2.vercel.app/'
    },
    {
        id: 14,
        title: 'Self Portrait',
        description: 'No face portait of me',
        img: MyImg,
        category: 'Digital Arts',
        tools: ['Adobe Illustrator, Adobe PhotoShop'],
    },
    {
        id: 15,
        title: 'U of C Brochure Design',
        description: 'Designed Brochure for an event for the University of Calgary',
        img: UCImg,
        category: 'Graphic Design',
        tools: ['Adobe InDesign, Adobe PhotoShop'],
    },
    {
        id: 16,
        title: 'Taylor Swift Poster Design',
        description: 'Poster Design of Taylor Swift. The inspiration came from a TikTok mashup audio that someone did, it got stuck in my head for months, so I had to create this poster.',
        img: TaylorImg,
        category: 'Digital Arts',
        tools: ['Adobe InDesign, Adobe PhotoShop'],
    },
];

const Projects = ({ limit }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleFilterChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredProjects = selectedCategory === 'All'
        ? projectData
        : projectData.filter(project => project.category === selectedCategory);

    const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

    return (
        <div id="projects" className="container">
            <h2>My Projects</h2>
            {!limit && (
                <div className="filter-bar">
                    <button onClick={() => handleFilterChange('All')}>All</button>
                    <button onClick={() => handleFilterChange('Graphic Design')}>Graphic Design</button>
                    <button onClick={() => handleFilterChange('Digital Arts')}>Digital Arts</button>
                    <button onClick={() => handleFilterChange('Web Design')}>Web Design</button>
                    <button onClick={() => handleFilterChange('Photography')}>Photography</button>
                </div>
            )}
            <div className="projects">
                {displayedProjects.map(project => (
                    <Link to={`/projects/${project.id}`} className="project" key={project.id}>
                        <div className="project-background" style={{ backgroundImage: `url(${project.img})` }}>
                            <div className="overlay">
                                <h3>{project.title}</h3>
                                <ul>
                                    {project.tools.map((tool, index) => (
                                        <li key={index}>{tool}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Projects;
