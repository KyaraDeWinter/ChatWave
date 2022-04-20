import React from 'react';
import './App.css';
import {Routes, Route} from "react-router-dom";

import Layout from './pages/Layout/Layout';
import Home from './pages/Home/Home'
import News from './pages/News/News'
import Contactpage from './pages/Contact/Contactpage'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="News" element={<News/>}/>
        <Route path="News" element={<Contactpage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;