export default function MobileNav({ open, show, close }) {
  return (
    <div className={`mob-nav${open ? " open" : ""}`} id="mobNav">
      <span className="mob-close" onClick={close}>✕</span>
      <a href="#" onClick={() => show("home")}>Home</a>
      <a href="#" onClick={() => show("about")}>About</a>
      <a href="#" onClick={() => show("services")}>Services</a>
      <a href="#" onClick={() => show("portfolio")}>Portfolio</a>
      <a href="#" onClick={() => show("contact")}>Contact</a>
    </div>
  );
}
