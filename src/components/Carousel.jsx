import { useRef, useEffect, useState } from "react";

import P1 from "../assets/P1.jpeg";
import P2 from "../assets/P2.jpeg";
import P3 from "../assets/P3.jpeg";
import P4 from "../assets/P4.jpeg";

import S1 from "../assets/S1.jpg";
import S2 from "../assets/S2.jpg";
import S3 from "../assets/S3.jpg";
import S4 from "../assets/S4.jpg";
import S5 from "../assets/S5.jpg";
import S6 from "../assets/S6.jpg";
import S7 from "../assets/S7.jpg";
import S8 from "../assets/S8.jpg";
import S9 from "../assets/S9.jpg";

const images = [
  { src: P1, alt: "App screenshot 1" },
  { src: P2, alt: "App screenshot 2" },
  { src: P3, alt: "App screenshot 3" },
  { src: P4, alt: "App screenshot 4" },
  { src: S1, alt: "StaySync screenshot 1" },
  { src: S2, alt: "StaySync screenshot 2" },
  { src: S3, alt: "StaySync screenshot 3" },
  { src: S4, alt: "StaySync screenshot 4" },
  { src: S5, alt: "StaySync screenshot 5" },
  { src: S6, alt: "StaySync screenshot 6" },
  { src: S7, alt: "StaySync screenshot 7" },
  { src: S8, alt: "StaySync screenshot 8" },
  { src: S9, alt: "StaySync screenshot 9" },
];
export default function Carousel() {
  const [cur, setCur] = useState(0);

  const go = (n) => setCur((n + images.length) % images.length);

  useEffect(() => {
    const t = setInterval(() => go(cur + 1), 3500);
    return () => clearInterval(t);
  }, [cur]);

  return (
    <div className="carousel-wrapper">
      <div className="phone-frame">
        <div
          className="phone-inner"
          style={{ transform: `translateX(-${cur * 100}%)` }}        >
          {images.map((img, i) => (
            <div className="slide" key={i}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => go(cur - 1)}>‹</button>
      <button onClick={() => go(cur + 1)}>›</button>

      <div className="dots">
        {images.map((_, i) => (
          <span key={i} className={i === cur ? "dot on" : "dot"} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}
