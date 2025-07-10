import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>Who We Are</h1>
        <p className="subtitle">Your Trusted Electrical Services Partner</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Kaiser Electrical Services has been serving the greater Houston area and surrounding communities 
            with professional electrical services for over 15 years. Founded on the principles of quality 
            workmanship, reliability, and customer satisfaction, we've built our reputation on delivering 
            exceptional electrical solutions for both residential and commercial clients.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            We are committed to providing safe, reliable, and efficient electrical services that exceed 
            our customers' expectations. Our team of licensed and certified electricians ensures that 
            every project, whether large or small, is completed with the highest standards of quality 
            and safety.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Kaiser Electrical Services?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Licensed & Insured</h3>
              <p>All our electricians are fully licensed, bonded, and insured for your peace of mind.</p>
            </div>
            <div className="feature">
              <h3>24/7 Emergency Service</h3>
              <p>Electrical emergencies don't wait for business hours. We're available around the clock.</p>
            </div>
            <div className="feature">
              <h3>Competitive Pricing</h3>
              <p>We offer fair, transparent pricing with no hidden fees or surprise charges.</p>
            </div>
            <div className="feature">
              <h3>Quality Guarantee</h3>
              <p>We stand behind our work with comprehensive warranties and satisfaction guarantees.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced electricians who are passionate about their craft and 
            committed to ongoing education in the latest electrical technologies and safety standards. 
            We believe in continuous improvement and staying current with industry best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 