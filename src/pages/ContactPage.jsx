import { COLORS } from "../constants/colors.js";
import { SERVICES_DATA } from "../data/servicesData.js";

const OFFICE_LOCATION = {
  title: "Northbridge House",
  addressLine: "Northbridge House, Elm St, Burnley BB10 1PD, UK",
  lat: 53.80117,
  lng: -2.24392,
};

const mapsQuery = encodeURIComponent(OFFICE_LOCATION.addressLine);
const mapsEmbedSrc = `https://www.google.com/maps?q=${OFFICE_LOCATION.lat},${OFFICE_LOCATION.lng}&z=17&output=embed`;
const mapsPlaceUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;

export function ContactPage() {
  return (
    <>
      <section className="dw-contact-hero">
        <div className="dw-contact-hero-inner">
          <span className="dw-section-badge" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)", display: "inline-block", marginBottom: 14 }}>
            Contact Us
          </span>
          <h1>Let&apos;s talk about your security</h1>
          <p>Our consultants are ready to assess your requirements and design a bespoke security solution. Get in touch — we typically respond within 2 hours.</p>
        </div>
      </section>

      <section className="dw-contact-cards">
        <div className="dw-contact-cards-inner">
          {[
            { icon: "💬", iconClass: "blue", title: "Live Chat", desc: "Chat with our team in real time for quick answers to your security questions.", action: "Start Chat →" },
            { icon: "📧", iconClass: "coral", title: "Email Us", desc: "Send us a detailed message and we'll respond with a tailored proposal within 24 hours.", action: "info@deltawatch.co.uk" },
            { icon: "📞", iconClass: "green", title: "Call Us", desc: "Speak directly with a security consultant. Available 24/7 for urgent enquiries.", action: "+44 7552 919616" },
          ].map((c, i) => (
            <div key={i} className="dw-contact-card">
              <div className={`dw-contact-card-icon ${c.iconClass}`}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a href="#">{c.action}</a>
            </div>
          ))}
        </div>
      </section>

      <section className="dw-contact-form-section">
        <div className="dw-contact-form-inner">
          <div className="dw-contact-info">
            <span className="dw-section-badge">Get In Touch</span>
            <h2>We&apos;d love to hear from you</h2>
            <p>Whether you need a quote, have a question about our services, or want to arrange a site assessment — our team is here and ready to help.</p>
            {[
              { icon: "📍", title: "Office Address", info: OFFICE_LOCATION.addressLine },
              { icon: "📞", title: "Phone Number", info: "+44 7552 919616 (24/7 Helpline)" },
              { icon: "📧", title: "Email Address", info: "info@deltawatch.co.uk" },
              { icon: "🕐", title: "Office Hours", info: "Mon – Fri: 08:00 – 18:00 · Emergency: 24/7" },
            ].map((d, i) => (
              <div key={i} className="dw-contact-detail">
                <div className="dw-contact-detail-icon">{d.icon}</div>
                <div className="dw-contact-detail-text">
                  <h4>{d.title}</h4>
                  <p>{d.info}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <span className="dw-section-badge">Send a Message</span>
            <div className="dw-form" style={{ marginTop: 20 }}>
              <div className="dw-form-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <input type="email" placeholder="Email Address" />
              <input type="tel" placeholder="Phone Number" />
              <select>
                <option value="">Select a Service</option>
                {SERVICES_DATA.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
              </select>
              <textarea placeholder="Tell us about your security requirements..." />
              <button type="button" className="dw-btn-primary" style={{ fontSize: 15, padding: "14px 28px" }}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.grey, padding: "0 0 0" }}>
        <div className="dw-map-wrap">
          <div className="dw-map-card" role="region" aria-label="Office location">
            <div className="dw-map-card-text">
              <strong className="dw-map-card-title">{OFFICE_LOCATION.title}</strong>
              <span className="dw-map-card-address">{OFFICE_LOCATION.addressLine}</span>
            </div>
            <div className="dw-map-card-actions">
              <a className="dw-map-card-btn" href={mapsPlaceUrl} target="_blank" rel="noopener noreferrer" aria-label="Open location in Google Maps">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </a>
              <a className="dw-map-card-btn" href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" aria-label="Get directions">
                <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 4 6 12h4v8h4v-8h4l-6-8z" />
                </svg>
              </a>
            </div>
          </div>
          <iframe
            className="dw-map"
            title="Northbridge House on Google Maps"
            src={mapsEmbedSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            height={380}
            style={{ border: "none", display: "block", width: "100%", height: 380 }}
          />
        </div>
      </section>
    </>
  );
}
