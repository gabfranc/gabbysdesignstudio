import React from 'react';
import { NavBar } from './components/Navbar'
import { Banner } from './components/Banner.jsx';
import { Skills } from './components/Skills.jsx';
import { Projects } from './components/Projects.jsx';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;

