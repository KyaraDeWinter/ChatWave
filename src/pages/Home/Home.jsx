import React from 'react';
import './Home.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Banner from '../../components/Banner/Banner.js';
import Card from '../../components/Card/Card.js';
import Premium from '../../components/Premium/Premium.js';
import About from '../../components/About/About.js'
import Contact from '../../components/Contact/Contact.js'

function Home() {
  return (
    <>
      <Banner/>
      <Card/>
      <Premium/>
      <About/>
      <Contact/>
    </>
  );
}

export default Home;