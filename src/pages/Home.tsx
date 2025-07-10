import React from 'react';
import KESLogo from '../assets/KESLogo.png';
import Review from '../components/Review';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h3 className="company-title">KAISER ELECTRICAL SERVICES</h3>
        <h1 className="construction-notice">SITE UNDER CONSTRUCTION</h1>
        <p className="construction-message">
          New management is handling the construction of our website. <br />
          Thank you for your interest and your patience.
        </p>
      </div>

      <div className="logo-section">
        <a href="https://kaiserelectricalservices.com" target="_blank" rel="noopener noreferrer">
          <img src={KESLogo} className="logo" alt="KES logo" />
        </a>
      </div>

      <div className="contact-section">
        <p className="contact-intro">
          Please reach us by...<br /><br />
        </p>
        <div className="contact-info">
          <p>Phone: <a href="tel:(936)933-3604">(936)933-3604</a></p>
          <p>Email: <a href="mailto:c.kaiser@kaiserelectricalservices.com">c.kaiser@kaiserelectricalservices.com</a></p>
          <p>Alt Email: <a href="mailto:m.reeves@kaiserelectricalservices.com">m.reeves@kaiserelectricalservices.com</a></p>
        </div>
      </div>

      <div className="reviews-section">
        <h2>Customer Reviews</h2>
        <div className="reviews-container">
          <Review 
            rating={5}
            reviewerName="Sarah Williams"
            reviewText="Had Kaiser Electrical install new LED lighting throughout our warehouse. The team worked efficiently and the energy savings are already noticeable. Professional service from start to finish!"
            date="2 days ago"
            verified={true}
          />
          
          <Review 
            rating={5}
            reviewerName="Robert Martinez"
            reviewText="Emergency electrical repair at 2 AM - they responded within 30 minutes and fixed our breaker issue. Outstanding customer service and fair pricing. Highly recommend!"
            date="1 week ago"
            verified={true}
          />
          
          <Review 
            rating={4}
            reviewerName="Lisa Anderson"
            reviewText="Great work upgrading our electrical panel. The crew was clean, professional, and explained everything clearly. Only giving 4 stars because they were a bit late on the first day."
            date="3 weeks ago"
            verified={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home; 