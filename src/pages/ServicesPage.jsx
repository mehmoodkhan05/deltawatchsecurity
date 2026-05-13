import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SERVICES_DATA } from "../data/servicesData.js";
import { useSiteNavigate } from "../hooks/useSiteNavigate.js";

export function ServicesPage() {
  const go = useSiteNavigate();
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace(/^#/, "");
    if (!id) return;
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(t);
  }, [location.hash, location.pathname]);

  return (
    <>
      <section className="dw-services-hero">
        <div className="dw-services-hero-inner">
          <span className="dw-section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}>
            Our Services
          </span>
          <h1>Comprehensive security solutions for every need</h1>
          <p>From boots on the ground to cutting-edge integrated technology — Delta Watch Security has the expertise and resources to protect what matters most to you.</p>
        </div>
      </section>

      <div className="dw-services-list">
        {SERVICES_DATA.map((s, i) => (
          <section key={s.id} id={s.id} className="dw-service-section">
            <div className="dw-service-inner" style={i % 2 !== 0 ? { direction: "rtl" } : {}}>
              <div style={i % 2 !== 0 ? { direction: "ltr" } : {}}>
                <div className="dw-service-visual">
                  <img className="dw-service-visual-img" src={s.image} alt={s.title} loading="lazy" decoding="async" />
                  <div className="dw-service-num">0{i + 1}</div>
                  <div className="dw-service-visual-content">
                    <div className="dw-service-visual-icon" aria-hidden>
                      {s.icon}
                    </div>
                    <div className="dw-service-visual-label">{s.title}</div>
                  </div>
                  <div className="dw-service-tag">{s.tag}</div>
                </div>
              </div>
              <div style={i % 2 !== 0 ? { direction: "ltr" } : {}}>
                <div className="dw-service-cat">{s.cat}</div>
                <h2 className="dw-service-h2">{s.heading}</h2>
                <p className="dw-service-p">{s.description}</p>
                <div className="dw-service-features">
                  {s.features.map((f) => (
                    <span key={f} className="dw-service-feat">
                      {f}
                    </span>
                  ))}
                </div>
                <button type="button" className="dw-btn-coral" onClick={() => go("/contact")}>
                  Enquire Now
                </button>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
