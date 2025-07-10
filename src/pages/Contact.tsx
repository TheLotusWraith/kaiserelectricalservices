import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p className="subtitle">Ready to Start Your Electrical Project?</p>
      </div>

      <div className="contact-content">
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          <div className="contact-methods">
            <div className="contact-method">
              <h3>Phone</h3>
              <p><a href="tel:(936)933-3604">(936) 933-3604</a></p>
              <p className="note">Available 24/7 for emergencies</p>
            </div>
            <div className="contact-method">
              <h3>Email</h3>
              <p><a href="mailto:c.kaiser@kaiserelectricalservices.com">c.kaiser@kaiserelectricalservices.com</a></p>
              <p><a href="mailto:m.reeves@kaiserelectricalservices.com">m.reeves@kaiserelectricalservices.com</a></p>
            </div>
            <div className="contact-method">
              <h3>Service Hours</h3>
              <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 4:00 PM</p>
              <p>Sunday: Emergency Service Only</p>
            </div>
            <div className="contact-method">
              <h3>Service Area</h3>
              <p>Greater Houston Area</p>
              <p>Spring, The Woodlands, Conroe</p>
              <p>And surrounding communities</p>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="service">Service Needed</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="residential">Residential Electrical</option>
                <option value="commercial">Commercial Electrical</option>
                <option value="new-construction">New Construction</option>
                <option value="emergency">Emergency Service</option>
                <option value="maintenance">Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Please describe your electrical needs or project details..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="emergency-section">
        <h2>Emergency Electrical Service</h2>
        <p>
          For electrical emergencies, please call us immediately at{' '}
          <a href="tel:(936)933-3604" className="emergency-phone">(936) 933-3604</a>
        </p>
        <p>We provide 24/7 emergency electrical services throughout our service area.</p>
      </div>
    </div>
  );
};

export default Contact; 