import React from 'react';
import   '../styles.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Our Features</h2>
        <div className="feature-item">
        
          <h3>Easy Booking</h3>
          <p>Book a ride in just a few taps.</p>
        </div>
        <div className="feature-item">
          
          <h3>Multiple Payment Options</h3>
          <p>Pay with cash, card, or Ola money.</p>
        </div>
        <div className="feature-item">
          
          <h3>Safe Rides</h3>
          <p>Our drivers are vetted and trained for your safety.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
