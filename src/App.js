import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';


import './styles.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
      
    </div>
  );
};

export default App;


