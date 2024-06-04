import React,{useState} from 'react';
import Header from './components/Header';
  import Hero from './components/Hero';
  import Features from './components/Features';
 import Footer from './components/Footer';
import Contact from './components/Contact';
import {Routes,Route}from 'react-router-dom';
 import About from './components/About'; 

import Login from './components/Login';







import './styles.css';

const App = () => {
  const [showComponents, setShowComponents] = useState(true);
  const handleSignInClick = () => {
    setShowComponents(false);
    window.open('/login', '_blank');
  };
  

 
 
  return (
   
    
    <Routes>
    
    <Route
          path="/"
          element={
            <>
              {showComponents && (
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
                
                  <Footer onClick={handleSignInClick} />
                 
                </div>
              )}
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        </Routes>

       
       
      
   
   
            

      
      
      
       
   
    
   
      
    
   
                    
    
  );
}
export default App;

