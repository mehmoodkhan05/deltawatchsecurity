import { useNavigate } from "react-router-dom";
import { Logo } from "./Logo.jsx";

export function Footer() {
  const navigate = useNavigate();
  const go = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="dw-footer">
      <div className="dw-footer-grid">
        <div>
          <Logo onClick={() => go("/")} />
          <p className="dw-footer-desc">
            Delta Watch Security provides premium security solutions across the UK. Licensed, insured, and dedicated to
            protecting what matters most to you.
          </p>
          <div className="dw-social-icons">
            {["𝕏", "in", "f", "▶"].map((icon, i) => (
              <div key={i} className="dw-social-icon">
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="dw-footer-h4">Quick Links</h4>
          {["home", "about", "services", "contact"].map((p) => (
            <button key={p} type="button" className="dw-footer-link" onClick={() => go(p === "home" ? "/" : `/${p}`)}>
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
        <div>
          <h4 className="dw-footer-h4">Stay Updated</h4>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: 16, lineHeight: 1.7 }}>
            Subscribe to receive security tips, industry news, and company updates.
          </p>
          <div className="dw-subscribe-form">
            <input className="dw-subscribe-input" type="email" placeholder="Your email address" />
            <button type="button" className="dw-btn-primary" style={{ whiteSpace: "nowrap", padding: "12px 18px" }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="dw-footer-bottom">
        <span className="dw-footer-copy">© 2026 Delta Watch Security. All rights reserved.</span>
        <span className="dw-footer-copy">
          Designed by <a href="#">WebyPixels</a>
        </span>
      </div>
    </footer>
  );
}
