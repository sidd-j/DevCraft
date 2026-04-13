export default function CTABand({ heading, emText, buttons }) {
  return (
    <div className="cta-band">
      <h2>{heading}<br /><em>{emText}</em></h2>
      <div className="cta-band-btns">
        {buttons.map((btn, i) => (
          <a key={i} className={btn.className} href={btn.href} onClick={btn.onClick} target={btn.target} rel={btn.rel}>
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
}
