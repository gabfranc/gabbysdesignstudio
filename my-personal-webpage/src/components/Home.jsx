import React from 'react';
import { Link } from 'react-router-dom';
import Projects from './Project'; // Ensure the file name matches
import Blog from './Blog';

const Home = () => {
    return (
        <div className="Home">
            <div className="Projects">
                <Projects limit={3} />
                <Link to="/projects">See More</Link>
            </div>
            <div className="Blogs">
                <Blog limit={3} />
                <Link to="/blog">See More</Link>
            </div>
        </div>
    );
};

export default Home;
