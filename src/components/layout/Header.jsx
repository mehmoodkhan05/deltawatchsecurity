import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SERVICES_DATA } from "../../data/servicesData.js";
import { useScrolled } from "../../hooks/useScrolled.js";
import { Logo } from "./Logo.jsx";

function pathToNavKey(pathname) {
  if (pathname === "/" || pathname === "") return "home";
  return pathname.replace(/^\//, "").split("/")[0] || "home";
}

export function Header() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const page = pathToNavKey(location.pathname);

  const go = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
    setMobileOpen(false);
  };

  const goServiceAnchor = (id) => {
    navigate(`/services#${id}`);
    window.scrollTo(0, 0);
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <>
      <nav className={`dw-nav${scrolled ? " scrolled" : ""}`}>
        <Logo onClick={() => go("/")} />
        <div className="dw-nav-links">
          {["home", "about", "services", "contact"].map((p) =>
            p === "services" ? (
              <div key={p} className="dw-dropdown">
                <button
                  type="button"
                  className={`dw-nav-link${page === p ? " active" : ""}`}
                  onClick={() => go("/services")}
                >
                  Services ▾
                </button>
                <div className="dw-dropdown-menu">
                  {SERVICES_DATA.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      className="dw-dropdown-item"
                      onClick={() => goServiceAnchor(s.id)}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <button
                key={p}
                type="button"
                className={`dw-nav-link${page === p ? " active" : ""}`}
                onClick={() => go(p === "home" ? "/" : `/${p}`)}
              >
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </button>
            )
          )}
        </div>
        <div className="dw-nav-right" style={{ display: "flex" }}>
          <button type="button" className="dw-btn-primary" onClick={() => go("/contact")}>
            Get Started
          </button>
        </div>
        <button
          type="button"
          className="dw-hamburger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
      <div className={`dw-mobile-menu${mobileOpen ? " open" : ""}`}>
        {["home", "about", "services", "contact"].map((p) => (
          <button
            key={p}
            type="button"
            className="dw-mobile-link"
            onClick={() => go(p === "home" ? "/" : `/${p}`)}
          >
            {p.charAt(0).toUpperCase() + p.slice(1)}
          </button>
        ))}
        {mobileOpen && (
          <>
            <div className="dw-mobile-sub">Our Services</div>
            {SERVICES_DATA.map((s) => (
              <button
                key={s.id}
                type="button"
                className="dw-mobile-link"
                style={{ paddingLeft: 28, fontSize: 13 }}
                onClick={() => goServiceAnchor(s.id)}
              >
                {s.title}
              </button>
            ))}
          </>
        )}
        <button type="button" className="dw-btn-primary" style={{ marginTop: 8 }} onClick={() => go("/contact")}>
          Get Started
        </button>
      </div>
    </>
  );
}
