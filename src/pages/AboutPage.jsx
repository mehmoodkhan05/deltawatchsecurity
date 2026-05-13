import { COLORS } from "../constants/colors.js";
import { useSiteNavigate } from "../hooks/useSiteNavigate.js";

export function AboutPage() {
  const go = useSiteNavigate();

  return (
    <>
      <section className="dw-about-hero">
        <div style={{ position: "relative", zIndex: 2 }}>
          <span className="dw-section-badge" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}>
            About Us
          </span>
          <h1>Built on trust. Driven by excellence.</h1>
          <p>
            For over 8 years, Delta Watch Security has been the trusted guardian for businesses, construction sites, and commercial properties across the United Kingdom.
          </p>
        </div>
      </section>

      <section className="dw-about-content">
        <div className="dw-about-grid">
          <div className="dw-about-visual">
            <div className="dw-about-visual-inner">
              <div className="dw-about-visual-icon">🛡️</div>
              <div className="dw-about-visual-label">Delta Watch Security</div>
              <div className="dw-about-visual-sub">Established 2016 · Burnley, UK</div>
            </div>
            <div className="dw-about-badge-wrap">
              <div className="dw-about-badge">
                8+ Years
                <br />
                <span style={{ fontWeight: 400, fontSize: 10 }}>of excellence</span>
              </div>
            </div>
          </div>
          <div className="dw-about-text">
            <span className="dw-section-badge">Who Are We?</span>
            <h2>A security partner you can genuinely trust</h2>
            <p>
              Delta Watch Security was founded with a single purpose: to provide businesses and property owners with security services they can genuinely rely on. From our base in Burnley, Lancashire, we&apos;ve grown into a respected provider across the North West and beyond, serving clients ranging from small independent businesses to major construction contractors.
            </p>
            <p>
              Our team is composed of former military personnel, police officers, and industry specialists, all holding current SIA licences and committed to the highest professional standards. We don&apos;t just guard premises — we build lasting partnerships based on transparency, reliability, and exceptional service delivery.
            </p>
            <div className="dw-about-values">
              {[
                { title: "Integrity First", desc: "Every action we take is underpinned by honesty and transparency with our clients." },
                { title: "Excellence in Delivery", desc: "We set and maintain the highest standards in every service we provide." },
                { title: "People-Centred", desc: "Our officers are our greatest asset — we invest heavily in their training and welfare." },
              ].map((v, i) => (
                <div key={i} className="dw-value-item">
                  <div className="dw-value-dot">
                    <span>✓</span>
                  </div>
                  <div className="dw-value-text">
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="dw-mission">
        <div className="dw-mission-inner">
          <span className="dw-section-badge" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", marginBottom: 20, display: "inline-block" }}>
            Our Mission
          </span>
          <h2>What drives us forward</h2>
          <blockquote>
            &quot;To deliver exceptional security services that provide genuine peace of mind — protecting people, property, and assets through professionalism, technology, and an unwavering commitment to our clients&apos; safety. We believe that outstanding security should be accessible, transparent, and built on trust.&quot;
          </blockquote>
          <button type="button" className="dw-btn-coral" onClick={() => go("/contact")}>
            Work With Us
          </button>
        </div>
      </section>

      <section className="dw-about-content" style={{ background: COLORS.grey }}>
        <div className="dw-about-grid reverse">
          <div className="dw-about-text">
            <span className="dw-section-badge">Our Team</span>
            <h2>Experienced professionals, exceptional results</h2>
            <p>
              At Delta Watch, we understand that the quality of your security is only as good as the people delivering it. That&apos;s why we invest significantly in the recruitment, training, and development of every member of our team.
            </p>
            <p>
              Our officers receive ongoing training in conflict management, first aid, fire safety, and customer service — ensuring they can handle any situation with skill and professionalism. Regular performance reviews and client feedback mechanisms keep standards consistently high across all deployments.
            </p>
            <button type="button" className="dw-btn-primary" style={{ marginTop: 10 }} onClick={() => go("/services")}>
              Explore Our Services
            </button>
          </div>
          <div className="dw-about-visual" style={{ background: "#131929" }}>
            <div className="dw-about-visual-inner">
              <div className="dw-about-visual-icon">👥</div>
              <div className="dw-about-visual-label">250+ Active Officers</div>
              <div className="dw-about-visual-sub">Nationwide deployment capability</div>
            </div>
            <div className="dw-about-badge-wrap">
              <div className="dw-about-badge">
                SIA Licensed
                <br />
                <span style={{ fontWeight: 400, fontSize: 10 }}>100% of our team</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
