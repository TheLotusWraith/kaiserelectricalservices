import React from 'react';
import './Services.css';

const Commercial: React.FC = () => {
  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Commercial Electrical Services</h1>
        <p className="subtitle">Professional Electrical Solutions for Businesses</p>
      </div>

      <div className="services-content">
        <div className="services-section">
          <h2>Complete Commercial Electrical Solutions</h2>
          <p>
            Kaiser Electrical Services delivers comprehensive electrical solutions for commercial 
            properties of all sizes. From office buildings to retail spaces, warehouses to restaurants, 
            we ensure your business has reliable, efficient electrical systems that support your operations.
          </p>
        </div>

        <div className="services-section">
          <h2>Our Commercial Services Include:</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Commercial Lighting</h3>
              <p>LED retrofits, energy-efficient lighting systems, and custom lighting solutions.</p>
            </div>
            <div className="service-item">
              <h3>Electrical Maintenance</h3>
              <p>Preventive maintenance programs to keep your electrical systems running smoothly.</p>
            </div>
            <div className="service-item">
              <h3>Power Distribution</h3>
              <p>Electrical panel upgrades, sub-panel installation, and power distribution systems.</p>
            </div>
            <div className="service-item">
              <h3>Emergency Power Systems</h3>
              <p>Backup generators, UPS systems, and emergency lighting installation.</p>
            </div>
            <div className="service-item">
              <h3>Data & Communication</h3>
              <p>Network cabling, phone systems, and data center electrical infrastructure.</p>
            </div>
            <div className="service-item">
              <h3>Security Systems</h3>
              <p>Security camera wiring, access control systems, and alarm installations.</p>
            </div>
            <div className="service-item">
              <h3>HVAC Electrical</h3>
              <p>Electrical connections and controls for commercial HVAC systems.</p>
            </div>
            <div className="service-item">
              <h3>Code Compliance</h3>
              <p>Ensure your electrical systems meet all commercial building codes and regulations.</p>
            </div>
          </div>
        </div>

        <div className="services-section">
          <h2>Industries We Serve:</h2>
          <div className="benefits-list">
            <div className="benefit">
              <h4>Office Buildings</h4>
              <p>Complete electrical solutions for modern office environments and workspaces.</p>
            </div>
            <div className="benefit">
              <h4>Retail & Restaurants</h4>
              <p>Electrical systems designed for customer-facing businesses and food service.</p>
            </div>
            <div className="benefit">
              <h4>Warehouses & Manufacturing</h4>
              <p>Heavy-duty electrical systems for industrial and manufacturing facilities.</p>
            </div>
            <div className="benefit">
              <h4>Healthcare Facilities</h4>
              <p>Specialized electrical systems meeting healthcare industry standards.</p>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Ready to Power Your Business?</h2>
          <p>Contact us for professional commercial electrical services that keep your business running efficiently.</p>
          <div className="cta-buttons">
            <a href="tel:(936)933-3604" className="cta-button primary">Call Now</a>
            <a href="/contact" className="cta-button secondary">Get Commercial Quote</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial; 