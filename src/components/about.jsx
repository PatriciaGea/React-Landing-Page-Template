
import React, { useState, useEffect, useRef } from "react";


export const About = (props) => {
  const locationText = "Mariatorget, Södermalm";
  // Lista de imagens do carrossel
  const carouselImages = [
    "2.webp",
    "20e02106-95d5-4cf1-a83f-6334f3d04191.webp",
    "2a125940-48f1-4300-8fa5-9ce92bfac525.webp",
    "5E6DB836-A7FB-4F6A-AD80-125DF63A6DD0.webp",
    "718ff91a-5247-4edd-8065-24b9316d1676.webp",
    "eee.webp",
    "IMG_1518.webp",
    "IMG_1702.webp",
    "IMG_1704.webp",
    "IMG_7485.webp"
  ];
  const [offset, setOffset] = useState(0);
  const total = carouselImages.length;
  const containerWidth = 550;
  const imgHeight = 200;
  const speed = 2; // px por frame (mais rápido)
  const animationRef = useRef();

  // Movimento contínuo
  useEffect(() => {
    function animate() {
      setOffset((prev) => {
        const totalWidth = total * imgHeight * 2; // largura total (proporcional)
        let next = prev + speed;
        if (next > totalWidth) next = 0;
        return next;
      });
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [total]);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/studio/estudio.webp" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Tattoo Ink Studio</h2>
              {props.data
                ? props.data.paragraph
                    .split("\n")
                    .filter((l) => l.trim())
                    .map((line, i) => {
                      const hasLocationLink = line.includes(locationText);
                      const isAddressLine = line.includes("Our studio has new address");
                      if (!hasLocationLink) {
                        return (
                          <p key={i} className={isAddressLine ? "about-address-line" : ""}>
                            {line}
                          </p>
                        );
                      }
                      const [before, after] = line.split(locationText);
                      return (
                        <p key={i} className={isAddressLine ? "about-address-line" : ""}>
                          {before}
                          <a href="#location" className="about-map-link">
                            {locationText}
                          </a>
                          {after}
                        </p>
                      );
                    })
                : <p>loading...</p>}
              {/* Carrossel animado contínuo, imagens proporcionais, sem destaque */}
              <div style={{ marginTop: 24, width: 550, overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', height: 200 }}>
                <div style={{ width: 550, height: 200, position: 'relative', overflow: 'hidden' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 200,
                      transform: `translateX(-${offset}px)`,
                      transition: 'none',
                      willChange: 'transform',
                    }}
                  >
                    {/* Duplicar as imagens para efeito looping */}
                    {[...carouselImages, ...carouselImages].map((img, idx) => (
                      <img
                        key={img + idx}
                        src={`img/studio/fotos/${img}`}
                        alt={`Slide ${idx + 1}`}
                        style={{
                          height: imgHeight,
                          width: 'auto',
                          objectFit: 'contain',
                          borderRadius: '24px', // cantos bem arredondados
                          marginRight: 10,
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
