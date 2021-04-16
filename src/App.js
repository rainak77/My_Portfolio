import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import Mycarousal from './components/my-carousal/my-carousal.component';
import MyNavbar from './components/my-navbar/mynavbar.component';
import Title from './components/title/title.component';
import About from './pages/about/about.component';
import background from './assets/img/background/background.webp';
import './App.css';
import Skills from './pages/skills/skills.component';
import { Projects } from './pages/Projects/projects.component';
import Slide from "react-reveal/Slide";


const App = () => {
  return (
    <div >
      <MyNavbar />
      <Mycarousal />
      <Title />

      {/* About Section */}
      <Parallax blur={{ min: -30, max: 30 }} bgImage={background} bgImageAlt="background" strength={-200}>
        <About />
      </Parallax>

      {/* Skills Section */}
      <Slide bottom duration={500}>
        <hr /> 
        <Skills />
      </Slide>

      <Projects />

    </div>
  );
};

export default App;