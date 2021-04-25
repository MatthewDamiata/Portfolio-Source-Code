import React from 'react';
import BackgroundParticles from './components/BackgroundParticles';
import TopNavbar from './components/TopNavbar';
import MainBody from './components/MainBody'
import Timeline from './components/Timeline'
import GithubDisplay from './components/GithubDisplay'
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <BackgroundParticles />
      <MainBody />
      <Timeline />
      <hr
        style={{
          color: 'black',
          backgroundColor: 'black',
          height: 1,
          width: '75%',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      />
      <h2>
        My Projects
      </h2>
      <GithubDisplay />
      © Matthew Damiata 2021
    </div>
  );
}

export default App;
