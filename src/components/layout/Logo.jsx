import logoImg from "../../../assets/logo-1.png";
import logoMark from "../../../assets/favicon.png";

export function Logo({ onClick, onLightSurface = false }) {
  return (
    <button type="button" className="dw-nav-logo" onClick={onClick} aria-label="Delta Watch Security — Home">
      <img
        src={onLightSurface ? logoMark : logoImg}
        alt=""
        className={`dw-logo-image${onLightSurface ? " dw-logo-image--for-light-nav" : ""}`}
        decoding="async"
      />
    </button>
  );
}
