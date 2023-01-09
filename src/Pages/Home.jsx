import React from 'react';
import "./style.css";

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';
import System from '../components/System/System';

function Home() {
  return (
    <div id="home">
        {/* <Navbar /> */}
        <Header />
        <About />
        <System />
        <News />
        <Footer />
    </div>
  )
}

export default Home