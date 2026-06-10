import { useEffect, useState } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo" onClick={closeMenu}>
          <img src="/logo.jpg" alt="ALG Projects Logo" className="nav-logo-img" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling!.style.display = 'flex'; }} />
          <div className="nav-ring" style={{ display: 'none' }}><span>ALG</span></div>
          <span className="nav-brand">ALG <em>Projects</em></span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#divisions">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="tel:0816622636" className="nav-cta">Call Now</a></li>
        </ul>
        <button 
          className={`hamburger ${menuOpen ? 'open' : ''}`} 
          id="hamburger" 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#about" className="mobile-link" onClick={closeMenu}>About</a>
        <a href="#divisions" className="mobile-link" onClick={closeMenu}>Services</a>
        <a href="#contact" className="mobile-link" onClick={closeMenu}>Contact</a>
        <p className="mobile-menu-number">081 662 2636</p>
      </div>
    </>
  );
}
