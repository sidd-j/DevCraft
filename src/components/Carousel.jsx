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
  const trackRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  const scroll = (dir) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: dir * 260, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const interval = setInterval(() => {
      track.scrollBy({ left: 260, behavior: "smooth" });
      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="carousel">
        <button className="nav prev" onClick={() => scroll(-1)}>❮</button>
        <div className="app-gallery" id="carouselTrack" ref={trackRef}>
          {images.map((img, i) => (
            <div className="app-card" key={i} onClick={() => setLightbox(img.src)}>
              <img src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
        <button className="nav next" onClick={() => scroll(1)}>❯</button>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
            background: "rgba(0,0,0,0.9)", display: "flex", justifyContent: "center",
            alignItems: "center", zIndex: 999, cursor: "pointer"
          }}
        >
          <img src={lightbox} alt="Zoomed" style={{ maxWidth: "90%", maxHeight: "90%", borderRadius: "10px" }} />
        </div>
      )}
    </>
  );
}
