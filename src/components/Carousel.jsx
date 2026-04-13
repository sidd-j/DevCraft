import { useRef, useEffect, useState } from "react";

const images = [
  { src: "src/assets/P1.jpeg", alt: "App screenshot 1" },
  { src: "src/assets/P2.jpeg", alt: "App screenshot 2" },
  { src: "src/assets/P3.jpeg", alt: "App screenshot 3" },
  { src: "src/assets/P4.jpeg", alt: "App screenshot 4" },
  { src: "src/assets/S1.jpg", alt: "StaySyne screenshot 1" },
  { src: "src/assets/S2.jpg", alt: "StaySyne screenshot 2" },
  { src: "src/assets/S3.jpg", alt: "StaySyne screenshot 3" },
  { src: "src/assets/S4.jpg", alt: "StaySyne screenshot 4" },
  { src: "src/assets/S5.jpg", alt: "StaySyne screenshot 5" },
  { src: "src/assets/S6.jpg", alt: "StaySyne screenshot 6" },
  { src: "src/assets/S7.jpg", alt: "StaySyne screenshot 7" },
  { src: "src/assets/S8.jpg", alt: "StaySyne screenshot 8" },
  { src: "src/assets/S9.jpg", alt: "StaySyne screenshot 9" },
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
