import React from 'react';
import MainBody from './components/MainBody'
import Timeline from './components/Timeline'
import './App.css';

function App() {
  return (
    <div className="App">
      <MainBody />
      <Timeline />
      <br></br>
      <div className="footer">© Matthew Damiata 2022</div>
    </div>
  );
}

export default App;
