import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';

function News() {
  return (
    <>
      <Navbar/>
      <Card/>
      <Footer/>
    </>
  );
}

export default News;