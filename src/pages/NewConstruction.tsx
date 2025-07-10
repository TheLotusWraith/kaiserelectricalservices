import React from 'react';
import './Services.css';

const NewConstruction: React.FC = () => {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>New Construction Electrical</h1>
        <p className="subtitle">Complete Electrical Solutions for New Buildings</p>
      </div>

      <div className="services-content">
        <div className="services-section">
          <h2>Comprehensive New Construction Services</h2>
          <p>
            From initial design to final inspection, Kaiser Electrical Services provides complete 
            electrical solutions for new construction projects. Our experienced team works closely 
            with builders, architects, and contractors to ensure your electrical systems meet all 
            codes and exceed expectations.
          </p>
        </div>

        <div className="services-section">
          <h2>Our New Construction Services Include:</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Electrical Design & Planning</h3>
              <p>Custom electrical system design tailored to your building's specific needs and requirements.</p>
            </div>
            <div className="service-item">
              <h3>Rough-In Electrical</h3>
              <p>Installation of electrical boxes, conduit, and wiring before walls are closed up.</p>
            </div>
            <div className="service-item">
              <h3>Panel Installation</h3>
              <p>Main electrical panel and sub-panel installation with proper load calculations.</p>
            </div>
            <div className="service-item">
              <h3>Lighting Systems</h3>
              <p>Complete lighting design and installation including LED, recessed, and specialty lighting.</p>
            </div>
            <div className="service-item">
              <h3>Outlets & Switches</h3>
              <p>Strategic placement and installation of outlets, switches, and electrical devices.</p>
            </div>
            <div className="service-item">
              <h3>HVAC Electrical</h3>
              <p>Electrical connections and controls for heating, ventilation, and air conditioning systems.</p>
            </div>
            <div className="service-item">
              <h3>Security Systems</h3>
              <p>Wiring and installation for security cameras, alarms, and access control systems.</p>
            </div>
            <div className="service-item">
              <h3>Final Inspection</h3>
              <p>Complete electrical inspection and testing to ensure code compliance and safety.</p>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2>Why Choose Us for New Construction?</h2>
          <div className="benefits-list">
            <div className="benefit">
              <h4>Code Compliance</h4>
              <p>We ensure all installations meet current electrical codes and safety standards.</p>
            </div>
            <div className="benefit">
              <h4>Project Coordination</h4>
              <p>Seamless coordination with other contractors to keep your project on schedule.</p>
            </div>
            <div className="benefit">
              <h4>Quality Materials</h4>
              <p>We use only high-quality electrical materials and components for lasting reliability.</p>
            </div>
            <div className="benefit">
              <h4>Warranty Protection</h4>
              <p>Comprehensive warranties on all new construction electrical work.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and estimate for your new construction electrical needs.</p>
          <div className="cta-buttons">
            <a href="tel:(936)933-3604" className="cta-button primary">Call Now</a>
            <a href="/contact" className="cta-button secondary">Get Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewConstruction; 