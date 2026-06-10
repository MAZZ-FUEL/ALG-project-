export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#" className="footer-logo">
            <img src="/logo.jpg" alt="ALG Projects Logo" className="footer-logo-img" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'flex'; }} />
            <div className="footer-logo-ring" style={{ display: 'none' }}><span>ALG</span></div>
            <span className="footer-logo-name">ALG <em>Projects</em></span>
          </a>
          <p className="footer-tagline">Turning Dreams into Reality.<br/>A proudly South African multi-division business.</p>
        </div>
        <div>
          <p className="footer-col-title">Services</p>
          <ul className="footer-links">
            <li><a href="#divisions">Health Division</a></li>
            <li><a href="#divisions">Transport Division</a></li>
            <li><a href="#divisions">Property Division</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Company</p>
          <ul className="footer-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Contact</p>
          <ul className="footer-links">
            <li><a href="tel:0816622636">081 662 2636</a></li>
            <li><a href="https://wa.me/27816622636" target="_blank" rel="noreferrer">WhatsApp Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} <em>ALG Projects</em>. All rights reserved.</span>
        <span className="footer-copy">Andisiwe Lauretta Gulubele</span>
      </div>
    </footer>
  );
}
