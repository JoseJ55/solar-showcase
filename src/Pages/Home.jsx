import React from 'react';
import "./style.css";

import Header from '../components/Header/Header';
import About from '../components/About/About';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';
import System from '../components/System/System';
import MainContainer from '../useComponets/MainContainer/MainContainer';

function Home() {
  return (
    <div id="home">
        <Header />

        <MainContainer>
          <About />
        </MainContainer>
        
        <System />

        <MainContainer>
          <News />
        </MainContainer>

        <Footer />
    </div>
  )
}

export default Home