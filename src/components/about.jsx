
import React, { useState, useEffect, useRef } from "react";

// Hook para detectar largura da tela
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}



export const About = (props) => {
  const locationText = "Mariatorget, Södermalm";
  const carouselImages = [
    "1.webp",
    "20e02106-95d5-4cf1-a83f-6334f3d04191.webp",
    "2a125940-48f1-4300-8fa5-9ce92bfac525.webp",
    "5E6DB836-A7FB-4F6A-AD80-125DF63A6DD0.webp",
    "718ff91a-5247-4edd-8065-24b9316d1676.webp",
    "77.webp",
    "771.webp",
    "eee.webp",
    "IMG_1518.webp",
    "IMG_1702.webp",
    "IMG_1704.webp",
    "IMG_7485.webp"
  ];
  const [offset, setOffset] = useState(0);
  const total = carouselImages.length;
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 480;
  const containerWidth = isMobile ? Math.min(windowWidth * 0.98, 340) : 550;
  const imgHeight = isMobile ? 120 : 200;
  const carouselHeight = isMobile ? 140 : 200;
  const speed = 2;
  const animationRef = useRef();

  useEffect(() => {
    function animate() {
      setOffset((prev) => {
        const totalWidth = total * imgHeight * 2;
        let next = prev + speed;
        if (next > totalWidth) next = 0;
        return next;
      });
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [total, imgHeight]);

  return (
    <div id="about">
      <div className="container">
        <div className="row" style={isMobile ? { flexDirection: 'column', alignItems: 'center', padding: '0 2vw' } : {}}>
          <div className="col-xs-12 col-md-6" style={isMobile ? { width: '100%', maxWidth: '100%', padding: 0, marginBottom: 18 } : {}}>
            <img src="img/studio/estudio.webp" className="img-responsive" alt="" style={isMobile ? { width: '98vw', maxWidth: 340, margin: '0 auto 16px auto', display: 'block', borderRadius: 18 } : {}} />
          </div>
          <div className="col-xs-12 col-md-6" style={isMobile ? { width: '100%', maxWidth: '100%', padding: 0 } : {}}>
            <div className="about-text" style={isMobile ? { padding: '0 2vw' } : {}}>
              <h2 style={isMobile ? { fontSize: 20, marginTop: 8, marginBottom: 10, textAlign: 'center' } : {}}>About Tattoo Ink Studio</h2>
              {props.data
                ? props.data.paragraph
                    .split("\n")
                    .filter((l) => l.trim())
                    .map((line, i) => {
                      const hasLocationLink = line.includes(locationText);
                      const isAddressLine = line.includes("Our studio has new address");
                      const withArtistLinks = line
                        .replace(/Patricia Gea/g, '<a href="#services" class="about-artist-link">Patricia Gea</a>')
                        .replace(/Rolando Barrau/g, '<a href="#services" class="about-artist-link">Rolando Barrau</a>');
                      if (!hasLocationLink) {
                        return (
                          <p key={i} className={isAddressLine ? "about-address-line" : ""} style={isMobile ? { fontSize: 14, textAlign: 'center' } : {}}>
                            {isAddressLine ? <b dangerouslySetInnerHTML={{ __html: withArtistLinks }} /> : <span dangerouslySetInnerHTML={{ __html: withArtistLinks }} />}
                          </p>
                        );
                      }
                      const [before, after] = line.split(locationText);
                      return (
                        <p key={i} className={isAddressLine ? "about-address-line" : ""} style={isMobile ? { fontSize: 14, textAlign: 'center' } : {}}>
                          {isAddressLine ? <b>{before}</b> : before}
                          <a href="#location" className="about-map-link" style={isMobile ? { fontSize: 15 } : {}}>
                            {locationText}
                          </a>
                          {isAddressLine ? <b>{after}</b> : after}
                        </p>
                      );
                    })
                : <p>loading...</p>}
              <div style={{ marginTop: 24, width: containerWidth, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', height: carouselHeight }}>
                <div style={{ width: containerWidth, height: carouselHeight, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: carouselHeight,
                      transform: `translateX(-${offset}px)`,
                      transition: 'none',
                      willChange: 'transform',
                    }}
                  >
                    {[...carouselImages, ...carouselImages].map((img, idx) => (
                      <img
                        key={img + idx}
                        src={`img/studio/fotos/${img}`}
                        alt={`Slide ${idx + 1}`}
                        style={{
                          height: imgHeight,
                          width: 'auto',
                          objectFit: 'contain',
                          borderRadius: isMobile ? 14 : 24,
                          marginRight: isMobile ? 6 : 10,
                          opacity: 1,
                          boxShadow: 'none',
                          background: '#fff',
                          transition: 'none',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
