export function Logo({ onClick }) {
  return (
    <div className="dw-nav-logo" onClick={onClick} role="presentation">
      <div className="dw-logo-icon">Δ</div>
      <div>
        <div className="dw-logo-text">Delta Watch</div>
        <div className="dw-logo-sub">Security</div>
      </div>
    </div>
  );
}
