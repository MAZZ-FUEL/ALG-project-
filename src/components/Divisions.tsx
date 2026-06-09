export function Divisions() {
  return (
    <section className="divisions-section" id="divisions">
      <div className="section-header reveal">
        <span className="section-label">What We Offer</span>
        <h2 className="section-title">Our <em>Divisions</em></h2>
      </div>

      <div className="divisions-grid">

        {/* Health */}
        <div className="division-card reveal">
          <span className="division-number">01</span>
          <div className="division-icon">
            <svg viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          <h3 className="division-name">Health Division</h3>
          <span className="division-sub">Wellness & Care</span>
          <ul className="division-services">
            <li><span className="service-dot"></span>Eczema Management</li>
            <li><span className="service-dot"></span>Hair Line Repair Treatment</li>
            <li><span className="service-dot"></span>Weight Loss Solutions</li>
          </ul>
        </div>

        {/* Transport */}
        <div className="division-card reveal">
          <span className="division-number">02</span>
          <div className="division-icon">
            <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          </div>
          <h3 className="division-name">Transport Division</h3>
          <span className="division-sub">Mobility & Logistics</span>
          <ul className="division-services">
            <li><span className="service-dot"></span>Shuttle Service</li>
            <li><span className="service-dot"></span>Trailer for Hire</li>
            <li><span className="service-dot"></span>Mattress for Hire</li>
          </ul>
        </div>

        {/* Property */}
        <div className="division-card reveal">
          <span className="division-number">03</span>
          <div className="division-icon">
            <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <h3 className="division-name">Property Division</h3>
          <span className="division-sub">Real Estate & Events</span>
          <ul className="division-services">
            <li><span className="service-dot"></span>Building & Construction Management</li>
            <li><span className="service-dot"></span>Rental Property Management</li>
            <li><span className="service-dot"></span>Event Venue for Hire</li>
            <li><span className="service-dot"></span>Event Management</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
