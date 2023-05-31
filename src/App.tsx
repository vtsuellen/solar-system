import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import './App.css';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <Header />
      <SolarSystem />
      <Missions />
    </>
  );
}

export default App;
