export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>
      <div className="hero-badge">ALG Projects</div>
      <h1 className="hero-title">
        Turning Dreams<br /><em>into Reality</em>
      </h1>
      <p className="hero-sub">Health · Transport · Property</p>
      <div className="hero-buttons">
        <a href="#divisions" className="btn-primary">Our Services</a>
        <a href="#contact" className="btn-outline">Get in Touch</a>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}
