import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


export const TattooMobileGallery = ({ images, artistName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="tattoo-mobile-gallery">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 8,
          justifyItems: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: 360,
          margin: "0 auto",
          boxSizing: "border-box"
        }}
      >
        {images.map((img, idx) => (
          <div
            key={img}
            className="artist-photo-circle"
            style={{ cursor: "pointer", width: "100%", maxWidth: 110, height: 110, display: "flex", alignItems: "center", justifyContent: "center" }}
            onClick={() => openLightbox(idx)}
          >
            <img
              src={img}
              alt={`Tattoo ${idx + 1}`}
              className="artist-photo-circle-image"
              style={{ width: "100%", maxWidth: 110, height: 110, objectFit: "cover", borderRadius: "50%" }}
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <>
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            index={photoIndex}
            slides={images.map((src) => ({ src }))}
            on={{
              view: ({ index }) => setPhotoIndex(index)
            }}
          />
          {/* Nome do artista no canto inferior direito do popup */}
          <div style={{
            position: 'fixed',
            bottom: 24,
            right: 32,
            zIndex: 9999999,
            color: '#fff',
            background: 'rgba(0,0,0,0.5)',
            padding: '6px 16px',
            borderRadius: 12,
            fontWeight: 600,
            fontSize: 16,
            pointerEvents: 'none',
            fontFamily: 'inherit',
            boxShadow: '0 2px 12px rgba(0,0,0,0.25)'
          }}>
            {artistName}
          </div>
        </>
      )}
    </div>
  );
};
