import React from 'react';
import './Services.css';

const Residential: React.FC = () => {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Residential Electrical Services</h1>
        <p className="subtitle">Professional Electrical Solutions for Your Home</p>
      </div>

      <div className="services-content">
        <div className="services-section">
          <h2>Complete Home Electrical Services</h2>
          <p>
            From routine maintenance to major upgrades, Kaiser Electrical Services provides comprehensive 
            electrical solutions for homeowners. Our licensed electricians ensure your home's electrical 
            systems are safe, efficient, and up to current standards.
          </p>
        </div>

        <div className="services-section">
          <h2>Our Residential Services Include:</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Electrical Repairs</h3>
              <p>Fast, reliable repairs for outlets, switches, lighting, and electrical panels.</p>
            </div>
            <div className="service-item">
              <h3>Panel Upgrades</h3>
              <p>Electrical panel replacement and upgrades to meet modern electrical demands.</p>
            </div>
            <div className="service-item">
              <h3>Lighting Installation</h3>
              <p>LED lighting, ceiling fans, chandeliers, and custom lighting solutions.</p>
            </div>
            <div className="service-item">
              <h3>Outlet & Switch Installation</h3>
              <p>New outlets, USB outlets, smart switches, and electrical device installation.</p>
            </div>
            <div className="service-item">
              <h3>Electrical Inspections</h3>
              <p>Comprehensive electrical safety inspections for home buyers and sellers.</p>
            </div>
            <div className="service-item">
              <h3>Emergency Services</h3>
              <p>24/7 emergency electrical repairs for urgent electrical issues.</p>
            </div>
            <div className="service-item">
              <h3>Home Automation</h3>
              <p>Smart home electrical systems, automation, and control installations.</p>
            </div>
            <div className="service-item">
              <h3>Generator Installation</h3>
              <p>Backup generator installation and maintenance for power outages.</p>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2>Common Residential Electrical Issues We Solve:</h2>
          <div className="benefits-list">
            <div className="benefit">
              <h4>Frequent Circuit Breaker Trips</h4>
              <p>Diagnose and fix overloaded circuits and electrical panel issues.</p>
            </div>
            <div className="benefit">
              <h4>Flickering Lights</h4>
              <p>Identify and resolve wiring problems causing light flickering.</p>
            </div>
            <div className="benefit">
              <h4>Hot Outlets</h4>
              <p>Fix dangerous hot outlets and prevent electrical fires.</p>
            </div>
            <div className="benefit">
              <h4>Insufficient Outlets</h4>
              <p>Add new outlets where needed for convenience and safety.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Need Electrical Work at Home?</h2>
          <p>Contact us for reliable, professional residential electrical services you can trust.</p>
          <div className="cta-buttons">
            <a href="tel:(936)933-3604" className="cta-button primary">Call Now</a>
            <a href="/contact" className="cta-button secondary">Schedule Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Residential; 