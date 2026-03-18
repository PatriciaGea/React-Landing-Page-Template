
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
  const isMobile = windowWidth <= 600;
  // Carrossel responsivo: largura máxima 98vw, altura proporcional
  const containerWidth = isMobile ? Math.min(windowWidth * 0.98, 380) : 550;
  const imgHeight = isMobile ? Math.max(Math.round(containerWidth * 0.38), 90) : 200;
  const carouselHeight = imgHeight + 20;
  // Velocidade do carrossel (px por frame)
  const speed = isMobile ? 0.6 : 1;
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
  }, [total, imgHeight, speed]);

  return (
    <div id="about">
      <div className="container">
        <div className="row" style={isMobile ? { flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', margin: 0, padding: 0 } : {}}>
          {isMobile && (
            <div style={{ width: '100%', textAlign: 'center', marginTop: 12, marginBottom: 12 }}>
              <h2 style={{ fontSize: 20, margin: 0, textAlign: 'center', width: '100%' }}>
                About Tattoo Ink Studio
              </h2>
              <div style={{
                margin: '8px auto 0',
                width: 60,
                height: 4,
                background: 'linear-gradient(to right, #c0a16b 0%, #111111 100%)',
                borderRadius: 2
              }} />
            </div>
          )}
          <div className="col-xs-12 col-md-6" style={isMobile ? { width: '100%', maxWidth: 380, margin: '0 auto 18px auto', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' } : { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 0, marginBottom: 0 }}>
            <img src="img/studio/estudio.webp" className="img-responsive" alt="" style={isMobile ? { width: '98vw', maxWidth: 340, margin: '0 auto 16px auto', display: 'block', borderRadius: 18 } : { margin: '0 auto 16px auto', display: 'block', borderRadius: 18 }} />
          </div>
          <div className="col-xs-12 col-md-6" style={isMobile ? { width: '100%', maxWidth: 380, margin: '0 auto', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', justifyContent: 'center' } : { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 0 }}>
            <div className="about-text" style={isMobile ? { padding: 0, width: '100%', maxWidth: 340, margin: '0 auto', textAlign: 'center' } : { width: '100%' }}>
              {!isMobile && (
                <>
                  <h2 style={{ fontSize: 32, marginTop: 8, marginBottom: 10, textAlign: 'center' }}>
                    About Tattoo Ink Studio
                  </h2>
                  <div style={{
                    margin: '8px auto 0',
                    width: 60,
                    height: 4,
                    background: 'linear-gradient(to right, #c0a16b 0%, #111111 100%)',
                    borderRadius: 2
                  }} />
                </>
              )}
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
              <div
                style={{
                  marginTop: 24,
                  width: isMobile ? '92vw' : '100%',
                  maxWidth: isMobile ? 320 : containerWidth,
                  marginLeft: isMobile ? 'auto' : undefined,
                  marginRight: isMobile ? 'auto' : undefined,
                  paddingLeft: isMobile ? 0 : undefined,
                  paddingRight: isMobile ? 0 : undefined,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  height: carouselHeight,
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: containerWidth,
                    height: carouselHeight,
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
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
                          width: isMobile ? Math.round(containerWidth * 0.7) : 220,
                          height: imgHeight,
                          objectFit: 'cover',
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
