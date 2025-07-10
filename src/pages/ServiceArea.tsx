import React from 'react';
import './ServiceArea.css';

const ServiceArea: React.FC = () => {
  return (
    <div className="service-area-page">
      <div className="service-area-hero">
        <h1>Where We Operate</h1>
        <p className="subtitle">Serving the Greater Houston Area and Beyond</p>
      </div>

      <div className="service-area-content">
        <div className="service-area-section">
          <h2>Our Service Area</h2>
          <p>
            Kaiser Electrical Services proudly serves the greater Houston metropolitan area and 
            surrounding communities. We're committed to providing reliable electrical services 
            to both residential and commercial clients throughout our service region.
          </p>
        </div>

        <div className="service-area-section">
          <h2>Primary Service Areas</h2>
          <div className="areas-grid">
            <div className="area-item">
              <h3>Houston</h3>
              <p>All areas of Houston including Downtown, Midtown, Heights, and surrounding neighborhoods.</p>
            </div>
            <div className="area-item">
              <h3>Spring</h3>
              <p>Spring, TX and surrounding communities in Montgomery County.</p>
            </div>
            <div className="area-item">
              <h3>The Woodlands</h3>
              <p>The Woodlands, TX and adjacent areas in Montgomery County.</p>
            </div>
            <div className="area-item">
              <h3>Conroe</h3>
              <p>Conroe, TX and surrounding areas in Montgomery County.</p>
            </div>
            <div className="area-item">
              <h3>Tomball</h3>
              <p>Tomball, TX and nearby communities in Harris and Montgomery Counties.</p>
            </div>
            <div className="area-item">
              <h3>Cypress</h3>
              <p>Cypress, TX and surrounding areas in Harris County.</p>
            </div>
          </div>
        </div>

        <div className="service-area-section">
          <h2>Counties We Serve</h2>
          <div className="counties-list">
            <div className="county">
              <h4>Harris County</h4>
              <p>Houston, Cypress, Katy, and surrounding areas</p>
            </div>
            <div className="county">
              <h4>Montgomery County</h4>
              <p>Spring, The Woodlands, Conroe, and surrounding areas</p>
            </div>
            <div className="county">
              <h4>Fort Bend County</h4>
              <p>Richmond, Sugar Land, and surrounding areas</p>
            </div>
            <div className="county">
              <h4>Liberty County</h4>
              <p>Liberty, Cleveland, and surrounding areas</p>
            </div>
          </div>
        </div>

        <div className="service-area-section">
          <h2>Emergency Service Coverage</h2>
          <p>
            We provide 24/7 emergency electrical services throughout our primary service areas. 
            For locations outside our standard service area, please contact us to discuss 
            availability and any additional travel fees that may apply.
          </p>
        </div>

        <div className="cta-section">
          <h2>Need Electrical Services in Our Area?</h2>
          <p>Contact us to confirm service availability in your specific location and schedule your electrical work.</p>
          <div className="cta-buttons">
            <a href="tel:(936)933-3604" className="cta-button primary">Call to Confirm Service</a>
            <a href="/contact" className="cta-button secondary">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea; 