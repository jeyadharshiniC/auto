import React,{useState} from 'react';
import Header from './components/Header';
  import Hero from './components/Hero';
  import Features from './components/Features';
 import Footer from './components/Footer';
import Contact from './components/Contact';
import {BrowserRouter}from 'react-router-dom';
 import About from './components/About'; 

import Login from './components/Login';







import './styles.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };
 
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
      {isLoggedIn ? (
        <Login />
      ) : (
        <Footer onSignIn={handleSignIn} />
      )}
      
   
            

      
      
      
    </div>
    
   
      
    
   
                    
    </BrowserRouter>
  );
}
export default App;

