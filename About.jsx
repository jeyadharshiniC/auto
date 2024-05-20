
import React from 'react';
import '../About.css';

const About = () => {
    return (
        <div className="about-container">
            <section className="hero">
                <h1>About US</h1>
                <p>Revolutionizing the way you move</p>
            </section>
            <section className="mission">
                <h2>Our Mission</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta facere error ut, officiis animi rem iusto rerum dicta id dolore culpa ullam omnis voluptatum ad incidunt consequatur. Illo alias voluptates ex nemo explicabo, culpa delectus obcaecati aspernatur vitae voluptas ipsa. Quasi odio quae cum sit voluptas vitae laudantium, officia laborum labore quisquam! Facere iste incidunt commodi, exercitationem ex consequatur rerum quaerat! Ducimus sunt laboriosam iusto temporibus omnis ipsum et dolorem quaerat corporis explicabo. Magnam, unde voluptatum nisi quae eos nam adipisci placeat dolorum laborum possimus asperiores! Vero delectus iste praesentium temporibus. Veritatis, rem qui. Cupiditate, alias? Explicabo ipsam ut ipsa!.</p>
            </section>
            <section className="team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                       
                        <h3>John</h3>
                        <p>CEO</p>
                    </div>
                    <div className="team-member">
                        
                        <h3>Jane</h3>
                        <p>CTO</p>
                    </div>
                    <div className="team-member">
                        
                        <h3>Johnson</h3>
                        <p>COO</p>
                    </div>
                </div>
            </section>
            <section className="contact-info">
                <h2>Contact Us</h2>
                <p>Email: contact@.com</p>
                <p>Phone: 9234566547</p>
            </section>
        </div>
    );
};

export default About;
