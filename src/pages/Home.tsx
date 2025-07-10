import React, { useState, useEffect } from 'react';
import KESLogo from '../assets/KESLogo.png';
import Review from '../components/Review';
import DigitalLoadingBar from '../components/DigitalLoadingBar';
import { ConstructionIcon, DigitalGearIcon, ProgressBarIcon, DigitalWaveIcon } from '../components/AnimatedIcons';
import './Home.css';

const Home: React.FC = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
      setShowContent(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    setTimeout(() => {
      setShowLoading(false);
      setShowContent(true);
    }, 500);
  };

  if (showLoading) {
    return (
      <div className="loading-page">
        <div className="loading-content">
          <div className="loading-logo">
            <img src={KESLogo} alt="KES Logo" />
          </div>
          <h2 className="loading-title">Kaiser Electrical Services</h2>
          <p className="loading-subtitle">Initializing Digital Infrastructure</p>
          <DigitalLoadingBar 
            duration={3000} 
            onComplete={handleLoadingComplete}
            className="loading-bar"
          />
          <div className="loading-icons">
            <ConstructionIcon size={32} className="loading-icon" />
            <DigitalGearIcon size={32} className="loading-icon" />
            <ProgressBarIcon size={32} className="loading-icon" />
            <DigitalWaveIcon size={32} className="loading-icon" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`home-page ${showContent ? 'fade-in' : ''}`}>
      <div className="hero-section">
        <div className="digital-scanline" />
        <div className="hero-content">
          <div className="hero-icons">
            <ConstructionIcon size={48} className="hero-icon" />
            <DigitalGearIcon size={48} className="hero-icon" />
          </div>
          <h3 className="company-title">KAISER ELECTRICAL SERVICES</h3>
          <h1 className="construction-notice">SITE UNDER CONSTRUCTION</h1>
          <p className="construction-message">
            New management is handling the construction of our website. <br />
            Thank you for your interest and your patience.
          </p>
          <div className="construction-status">
            <ProgressBarIcon size={24} className="status-icon" />
            <span>Development in Progress</span>
          </div>
        </div>
      </div>

      <div className="logo-section">
        <a href="https://kaiserelectricalservices.com" target="_blank" rel="noopener noreferrer">
          <img src={KESLogo} className="logo" alt="KES logo" />
        </a>
      </div>

      <div className="contact-section">
        <div className="contact-header">
          <DigitalWaveIcon size={32} className="contact-icon" />
          <h2>Get In Touch</h2>
        </div>
        <p className="contact-intro">
          Please reach us by...<br /><br />
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Phone:</span>
            <a href="tel:(936)933-3604">(936)933-3604</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Email:</span>
            <a href="mailto:c.kaiser@kaiserelectricalservices.com">c.kaiser@kaiserelectricalservices.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Alt Email:</span>
            <a href="mailto:m.reeves@kaiserelectricalservices.com">m.reeves@kaiserelectricalservices.com</a>
          </div>
        </div>
      </div>

      <div className="reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="reviews-container">
          <Review 
            reviewerName="Sarah Johnson"
            rating={5}
            reviewText="Kaiser Electrical Services did an amazing job on our new construction project. Professional, reliable, and excellent quality work."
            date="2 weeks ago"
            verified={true}
          />
          <Review 
            reviewerName="Mike Rodriguez"
            rating={5}
            reviewText="Outstanding service for our commercial electrical needs. The team was knowledgeable and completed the work on time."
            date="1 month ago"
            verified={true}
          />
          <Review 
            reviewerName="Jennifer Lee"
            rating={5}
            reviewText="Highly recommend for residential electrical work. Fair pricing and exceptional customer service throughout the project."
            date="3 weeks ago"
            verified={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Home; 