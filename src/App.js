import React from 'react';
import Header from './components/Header';
  import Hero from './components/Hero';
  import Features from './components/Features';
 import Footer from './components/Footer';
import Contact from './components/Contact';
import {BrowserRouter} from 'react-router-dom';
 import About from './components/About';
 






import './styles.css';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
       <About />
      </section>
      <section id="features">
       <Features />
      </section>
      <section id="contact">
      <Contact />
      </section>
      <Footer />
    </div>
    </BrowserRouter>
  );
}
export default App;

