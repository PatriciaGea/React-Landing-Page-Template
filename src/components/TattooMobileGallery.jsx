import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export const TattooMobileGallery = ({ images }) => {
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
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
      )}
    </div>
  );
};
