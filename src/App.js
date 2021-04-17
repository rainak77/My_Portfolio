import React from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import Mycarousal from './components/my-carousal/my-carousal.component';
import MyNavbar from './components/my-navbar/mynavbar.component';
import Title from './components/title/title.component';
import About from './pages/about/about';
import background from './assets/img/background/background.webp';
import './App.css';
import Skills from './pages/skills/skills.component';
import { Projects } from './pages/Projects/Projects';
import Slide from "react-reveal/Slide";
import Contact from './pages/contact/Contact';
import Footer from './components/footer/footer.component';


const App = () => {
  return (
    <div className='' >
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

      <Slide bottom duration={500}>
        <Projects />
      </Slide>
      <Slide bottom duration={500}>
        <Contact />
      </Slide>
      <Footer />
    </div>
  );
};

export default App;