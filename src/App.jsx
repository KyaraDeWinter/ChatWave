import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner.js';
import Card from './components/Card/Card.js';
import Premium from './components/Premium/Premium.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Card id="action1"/>
      <Premium/>
      <Footer/>
    </>
  );
}

export default App;