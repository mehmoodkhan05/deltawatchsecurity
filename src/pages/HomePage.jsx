import { COLORS } from "../constants/colors.js";
import { Counter } from "../components/Counter.jsx";
import { useSiteNavigate } from "../hooks/useSiteNavigate.js";
import heroSectionLogo from "../../assets/heroSection.png";

export function HomePage() {
  const go = useSiteNavigate();

  return (
    <>
      <section className="dw-hero">
        <div className="dw-circuit">
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <line x1="0" y1="200" x2="400" y2="200" stroke="#2B63F1" strokeWidth="1" className="dw-circuit-line" />
            <circle cx="400" cy="200" r="4" fill="#2B63F1" />
            <line x1="400" y1="200" x2="400" y2="400" stroke="#2B63F1" strokeWidth="1" className="dw-circuit-line" style={{ animationDelay: "0.5s" }} />
            <circle cx="400" cy="400" r="4" fill="#2B63F1" />
            <line x1="400" y1="400" x2="700" y2="400" stroke="#2B63F1" strokeWidth="1" className="dw-circuit-line" style={{ animationDelay: "1s" }} />
            <circle cx="700" cy="400" r="4" fill="#2B63F1" />
            <line x1="700" y1="400" x2="700" y2="600" stroke="#FF7A59" strokeWidth="1" className="dw-circuit-line" style={{ animationDelay: "1.5s" }} />
            <circle cx="700" cy="600" r="4" fill="#FF7A59" />
            <line x1="700" y1="600" x2="1100" y2="600" stroke="#FF7A59" strokeWidth="1" className="dw-circuit-line" style={{ animationDelay: "2s" }} />
            <line x1="1000" y1="0" x2="1000" y2="300" stroke="#2B63F1" strokeWidth="1" className="dw-circuit-line" style={{ animationDelay: "0.8s" }} />
            <circle cx="1000" cy="300" r="4" fill="#2B63F1" />
            <line x1="1000" y1="300" x2="1300" y2="300" stroke="#2B63F1" strokeWidth="1" className="dw-circuit-line" style={{ animationDelay: "1.3s" }} />
            <circle cx="200" cy="500" r="60" stroke="#2B63F1" strokeWidth="0.5" fill="none" />
            <circle cx="1300" cy="150" r="80" stroke="#FF7A59" strokeWidth="0.5" fill="none" />
            <circle cx="900" cy="700" r="40" stroke="#2B63F1" strokeWidth="0.5" fill="none" />
          </svg>
        </div>
        <div className="dw-hero-grid">
          <div>
            <div className="dw-hero-badge">
              <div className="dw-hero-badge-dot" />
              Trusted UK Security Provider
            </div>
            <h1 className="dw-hero-h1">
              Make you feel <span>secure</span> & save your money
            </h1>
            <p className="dw-hero-p">
              Delta Watch Security delivers enterprise-grade protection with SIA-licensed officers, cutting-edge technology, and a commitment to excellence. From manned guarding to integrated solutions — we safeguard your assets 24/7.
            </p>
            <div className="dw-hero-btns">
              <button type="button" className="dw-btn-coral" onClick={() => go("/contact")}>
                Get a Free Quote
              </button>
              <button type="button" className="dw-btn-outline" onClick={() => go("/services")}>
                Explore Services
              </button>
            </div>
            <div className="dw-hero-trust">
              <div className="dw-hero-trust-avatars">
                {["DC", "MW", "AS", "KP"].map((i) => (
                  <div key={i} className="dw-trust-avatar">
                    {i}
                  </div>
                ))}
              </div>
              <div className="dw-hero-trust-text">
                Trusted by <strong>156+ clients</strong> across the UK
              </div>
            </div>
          </div>
          <div className="dw-hero-visual">
            <div className="dw-hero-card-main">
              <img
                src={heroSectionLogo}
                alt=""
                className="dw-hero-section-logo"
                decoding="async"
              />
              <div style={{ textAlign: "center", marginTop: 10 }}>
                <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 16, fontWeight: 700 }}>Active Protection</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: 4 }}>24/7 Monitoring Active</div>
              </div>
            </div>
            <div className="dw-float-card card1">
              <span className="dw-float-icon">✅</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>SIA Licensed</div>
                <div style={{ fontSize: 11, color: "#888" }}>All Officers Verified</div>
              </div>
            </div>
            <div className="dw-float-card card2">
              <span className="dw-float-icon">🔔</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 13 }}>Alert Response</div>
                <div style={{ fontSize: 11, color: "#888" }}>Under 4 Minutes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dw-stats">
        <div className="dw-stats-inner">
          {[
            { num: 8, suf: " Years", label: "Industry Experience" },
            { num: 250, suf: "+", label: "Active Officers" },
            { num: 156, suf: "+", label: "Happy Customers" },
            { num: 86, suf: "+", label: "Protected Assets" },
          ].map((s, i) => (
            <div key={i} className="dw-stat-item">
              <div className="dw-stat-num">
                <Counter target={s.num} suffix={s.suf} delay={i * 150} />
              </div>
              <div className="dw-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="dw-why">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="dw-section-header">
            <span className="dw-section-badge">Why Delta Watch</span>
            <h2 className="dw-section-h2">Security you can rely on, every hour of every day</h2>
            <p className="dw-section-p">
              We combine rigorous personnel standards, advanced technology, and deep industry experience to deliver security solutions that genuinely protect your business.
            </p>
          </div>
          <div className="dw-features-grid">
            {[
              {
                icon: "🛡️",
                title: "SIA Licensed & Vetted",
                desc: "Every officer holds a valid SIA licence and has undergone comprehensive background checks, ensuring only the most trusted individuals protect your property.",
              },
              {
                icon: "⚡",
                title: "Rapid Incident Response",
                desc: "Our control room operates 24/7 with an average response time under 4 minutes, backed by mobile patrol teams and direct police liaison capabilities.",
              },
              {
                icon: "📱",
                title: "Real-Time Monitoring",
                desc: "Live CCTV feeds, GPS-tracked patrols, and digital incident reporting give you complete visibility of your security operation at all times.",
              },
              {
                icon: "🏆",
                title: "Award-Winning Service",
                desc: "Recognised across the UK security industry for our commitment to quality, professionalism, and customer satisfaction year after year.",
              },
              {
                icon: "🔧",
                title: "Bespoke Solutions",
                desc: "We never apply a one-size-fits-all approach. Every security plan is designed from the ground up to meet the specific risks and requirements of your premises.",
              },
              {
                icon: "📋",
                title: "Full Compliance",
                desc: "We operate in strict accordance with BS7499, BS7858, and all relevant UK legislation, ensuring your security is not only effective but fully compliant.",
              },
            ].map((f, i) => (
              <div key={i} className="dw-feature-card">
                <div className="dw-feature-icon">
                  <span style={{ fontSize: 24 }}>{f.icon}</span>
                </div>
                <h3 className="dw-feature-h3">{f.title}</h3>
                <p className="dw-feature-p">{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 50 }}>
            <button type="button" className="dw-btn-coral" onClick={() => go("/contact")}>
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.royal, padding: "70px 5%", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,0,0,0.15), transparent)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", marginBottom: 14, letterSpacing: -0.5 }}>Ready to secure your premises?</h2>
          <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
            Get in touch with our security consultants today for a free, no-obligation assessment of your site.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button type="button" className="dw-btn-coral" onClick={() => go("/contact")}>
              Request Free Assessment
            </button>
            <button type="button" className="dw-btn-outline" onClick={() => go("/services")}>
              View Our Services
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
