import React, { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [division, setDivision] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = () => {
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }

    let text = `Hello ALG Projects! 👋\n\nName: ${name.trim()}`;
    if (phone.trim()) text += `\nPhone: ${phone.trim()}`;
    if (division) text += `\nInterested in: ${division}`;
    if (message.trim()) text += `\n\nMessage: ${message.trim()}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/27816622636?text=${encoded}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-left reveal">
        <span className="section-label">Get in Touch</span>
        <h2 className="section-title">Let's work<br /><em>together</em></h2>
        <p className="contact-desc">Ready to get started? Reach out via call or WhatsApp and Andisiwe will personally assist you with any of our services.</p>

        <div className="contact-methods">
          <a href="tel:0816622636" className="contact-method">
            <div className="method-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <div className="method-info">
              <span className="method-label">Call Us</span>
              <span className="method-value">081 662 2636</span>
            </div>
          </a>
          <a href="https://wa.me/27816622636" target="_blank" rel="noreferrer" className="contact-method">
            <div className="method-icon">
              <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
            </div>
            <div className="method-info">
              <span className="method-label">WhatsApp</span>
              <span className="method-value">081 662 2636</span>
            </div>
          </a>
        </div>
      </div>

      <div className="contact-right reveal">
        <div className="contact-form" id="contactForm">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Your name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="e.g. 082 000 0000" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Division of Interest</label>
            <select 
              className="form-select form-input"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
            >
              <option value="" disabled>Select a division</option>
              <option value="Health Division">Health Division</option>
              <option value="Transport Division">Transport Division</option>
              <option value="Property Division">Property Division</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea 
              className="form-textarea form-input" 
              placeholder="Tell us how we can help..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="button" className="form-submit" onClick={handleWhatsAppSubmit}>
            Send via WhatsApp
            <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
