import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner.js';
import Card from './components/Card/Card.js';
import Premium from './components/Premium/Premium.js';
import About from './components/About/About.js'
import Contact from './components/Contact/Contact.js'
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Card/>
      <Premium/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;