
import './App.css';
import React from 'react';
import Header from './compenents/Fichier/Header';
import Service from './compenents/Fichier/Service';
import Card from './compenents/Fichier/Card'
import Client from './compenents/Fichier/Client';
import Techserve from './compenents/Fichier/Techserve';
import TechserveFooter from './compenents/Fichier/TechserveFooter';

function App() {
  return (
    <div className="App">
    <Header />
    <Service />
    <Card />
    <Client />
    <Techserve />
    <TechserveFooter />
    </div>
  );
}

export default App;
