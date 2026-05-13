import { useEffect, useRef, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { COLORS } from "../constants/colors.js";
import { SERVICES_DATA } from "../data/servicesData.js";

/** Form `name` values match EmailJS "Contact Us" template: {{lead_name}}, {{lead_fname}}, … */
const EMAILJS_SERVICE_ID = "service_6jhjucc";
const EMAILJS_TEMPLATE_ID = "template_tjuamhi";
const EMAILJS_PUBLIC_KEY = "E4sjWtAwUcuw3PNa3";

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
  const formRef = useRef(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [leadServices, setLeadServices] = useState("");

  useEffect(() => {
    const id = searchParams.get("service");
    if (!id) return;
    const svc = SERVICES_DATA.find((s) => s.id === id);
    if (svc) setLeadServices(svc.title);
  }, [searchParams]);

  useEffect(() => {
    if (location.pathname !== "/contact") return;
    const hash = location.hash.replace(/^#/, "");
    const hasService = Boolean(searchParams.get("service"));
    if (hash !== "contact-form" && !hasService) return;
    const t = window.setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash, searchParams]);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    const fname = String(fd.get("lead_fname") ?? "").trim();
    const lname = String(fd.get("lead_lname") ?? "").trim();
    const leadEmail = String(fd.get("lead_email") ?? "").trim();
    const leadPhone = String(fd.get("lead_pnumber") ?? "").trim();
    const leadServices = String(fd.get("lead_services") ?? "").trim();
    const leadMessage = String(fd.get("lead_message") ?? "").trim();

    const leadNameEl = form.elements.namedItem("lead_name");
    if (leadNameEl && "value" in leadNameEl) {
      leadNameEl.value = [fname, lname].filter(Boolean).join(" ");
    }

    const conversationEl = form.elements.namedItem("conversation");
    if (conversationEl && "value" in conversationEl) {
      conversationEl.value = [
        `Name: ${[fname, lname].filter(Boolean).join(" ")}`,
        `Email: ${leadEmail}`,
        `Phone: ${leadPhone || "—"}`,
        `Service: ${leadServices || "—"}`,
        "",
        "Requirements:",
        leadMessage || "—",
      ].join("\n");
    }

    setStatus({ type: "sending", message: "" });

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          form.reset();
          setLeadServices("");
          setStatus({
            type: "success",
            message: "Thank you — your message has been sent. We will reply shortly.",
          });
          setTimeout(() => setStatus({ type: "idle", message: "" }), 6000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus({
            type: "error",
            message:
              error?.text ||
              "Something went wrong sending your message. Please try again or email us directly.",
          });
        },
      );
  };

  return (
    <>
      <section className="dw-contact-hero">
        <div className="dw-contact-hero-inner">
          <span
            className="dw-section-badge"
            style={{
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.65)",
              display: "inline-block",
              marginBottom: 14,
            }}
          >
            Contact Us
          </span>
          <h1>Let&apos;s talk about your security</h1>
          <p>
            Our consultants are ready to assess your requirements and design a
            bespoke security solution. Get in touch — we typically respond
            within 2 hours.
          </p>
        </div>
      </section>

      <section className="dw-contact-cards">
        <div className="dw-contact-cards-inner">
          {[
            {
              icon: "💬",
              iconClass: "blue",
              title: "Live Chat",
              desc: "Chat with our team in real time for quick answers to your security questions.",
              action: "Start Chat →",
            },
            {
              icon: "📧",
              iconClass: "coral",
              title: "Email Us",
              desc: "Send us a detailed message and we'll respond with a tailored proposal within 24 hours.",
              action: "info@deltawatchsecurity.com",
            },
            {
              icon: "📞",
              iconClass: "green",
              title: "Call Us",
              desc: "Speak directly with a security consultant. Available 24/7 for urgent enquiries.",
              action: "+44 7552 919616",
            },
          ].map((c, i) => (
            <div key={i} className="dw-contact-card">
              <div className={`dw-contact-card-icon ${c.iconClass}`}>
                {c.icon}
              </div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <a href="#">{c.action}</a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="dw-contact-form-section">
        <div className="dw-contact-form-inner">
          <div className="dw-contact-info">
            <span className="dw-section-badge">Get In Touch</span>
            <h2>We&apos;d love to hear from you</h2>
            <p>
              Whether you need a quote, have a question about our services, or
              want to arrange a site assessment — our team is here and ready to
              help.
            </p>
            {[
              {
                icon: "📍",
                title: "Office Address",
                info: OFFICE_LOCATION.addressLine,
              },
              {
                icon: "📞",
                title: "Phone Number",
                info: "+44 7552 919616 (24/7 Helpline)",
              },
              {
                icon: "📧",
                title: "Email Address",
                info: "info@deltawatchsecurity.com",
              },
              {
                icon: "🕐",
                title: "Office Hours",
                info: "Mon – Fri: 09:00 – 17:00 · Emergency: 24/7",
              },
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
            <form
              id="form"
              className="registration-form needs-validation"
              ref={formRef}
              onSubmit={sendEmail}
            >
              <div className="dw-form" style={{ marginTop: 20 }}>
                <input type="hidden" name="lead_name" defaultValue="" />
                <input type="hidden" name="conversation" defaultValue="" />
                {status.message ? (
                  <p
                    role="status"
                    style={{
                      marginBottom: 12,
                      padding: "12px 14px",
                      borderRadius: 8,
                      fontSize: 14,
                      lineHeight: 1.45,
                      background:
                        status.type === "success"
                          ? "rgba(34, 197, 94, 0.12)"
                          : status.type === "error"
                            ? "rgba(239, 68, 68, 0.12)"
                            : "rgba(59, 130, 246, 0.12)",
                      color:
                        status.type === "success"
                          ? "#166534"
                          : status.type === "error"
                            ? "#991b1b"
                            : "#1e3a5f",
                    }}
                  >
                    {status.message}
                  </p>
                ) : null}
                <div className="dw-form-row">
                  <input
                    type="text"
                    name="lead_fname"
                    placeholder="First Name"
                    required
                    autoComplete="given-name"
                  />
                  <input
                    type="text"
                    name="lead_lname"
                    placeholder="Last Name"
                    required
                    autoComplete="family-name"
                  />
                </div>
                <input
                  type="email"
                  name="lead_email"
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                />
                <input
                  type="tel"
                  name="lead_pnumber"
                  placeholder="Phone Number"
                  autoComplete="tel"
                />
                <select
                  name="lead_services"
                  value={leadServices}
                  onChange={(e) => setLeadServices(e.target.value)}
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  {SERVICES_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
                <textarea
                  name="lead_message"
                  placeholder="Tell us about your security requirements..."
                  required
                  rows={5}
                />
                <button
                  type="submit"
                  className="dw-btn-primary"
                  style={{ fontSize: 15, padding: "14px 28px" }}
                  disabled={status.type === "sending"}
                >
                  {status.type === "sending"
                    ? "Sending…"
                    : "Send Message →"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.grey, padding: "0 0 0" }}>
        <div className="dw-map-wrap">
          <div
            className="dw-map-card"
            role="region"
            aria-label="Office location"
          >
            <div className="dw-map-card-text">
              <strong className="dw-map-card-title">
                {OFFICE_LOCATION.title}
              </strong>
              <span className="dw-map-card-address">
                {OFFICE_LOCATION.addressLine}
              </span>
            </div>
            <div className="dw-map-card-actions">
              <a
                className="dw-map-card-btn"
                href={mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open location in Google Maps"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
                  />
                </svg>
              </a>
              <a
                className="dw-map-card-btn"
                href={mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
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
            style={{
              border: "none",
              display: "block",
              width: "100%",
              height: 380,
            }}
          />
        </div>
      </section>
    </>
  );
}
