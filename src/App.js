import React from 'react';
import './App.css';
import Mycarousal from './components/my-carousal/my-carousal.component';
import MyNavbar from './components/my-navbar/mynavbar.component';
import Title from './components/title/title.component';


const App = () => {
  return (
    <div>
      <MyNavbar />
      <Mycarousal />
      <Title />
    </div>
  );
};

export default App;