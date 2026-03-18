import React, { useState } from "react";

export const Services = () => {
    // Função para abrir popup do tamanho da imagem
    const openTattooPopup = (src) => {
      const img = new window.Image();
      img.src = src;
      img.onload = function () {
        const width = img.naturalWidth || 800;
        const height = img.naturalHeight || 800;
        window.open(
          src,
          'tattooPopup',
          `width=${width},height=${height},menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes`
        );
      };
    };
  const [hoveredArtist, setHoveredArtist] = useState(null);

  const artists = [
    {
      name: "Patricia Gea",
      compactText: true,
      lines: [
        "Tattoo artist since 2008.",
        "Founder of 2 studios Tattoo Ink Sao Paulo - BR.",
        "Founder of Tattoo Ink - Stockholm - SE.",
        "Swedish Tatuerare registrerad (SRT)",
        "Having her own signature, Patricia's work is geometric and graphic designs, with reference in henna painting, native american paintings, swedish kurbits, crochet, macrame and tricot patterns.",
      ],
      bookingLabel: "Book Online Patricia",
      bookingUrl: "https://patriciagea.simplybook.it",
      contactLabel: "contact:",
      contactEmail: "patricia@tattooink.se",
      instagramUrl: "https://www.instagram.com/patriciagea",
      instagramLabel: "Instagram Patricia @patriciagea",
      fineLineInstagramUrl: "https://www.instagram.com/patriciagea.tattoo",
      fineLineInstagramLabel: "Fine line @patriciagea.tattoo",
      facebookUrl: "https://www.facebook.com/Tattoo-Ink-Stockholm-2105816132802255/",
    },
    {
      name: "Rolando Barrau",
      lines: [
        "Tattoo artist.",
        "Rolando, Tattoo artist since 2010, enjoy doing all kind of styles, realism specialist.",
        "Book your tattoo by e-mail or Instagram",
      ],
      bookingLabel: "Book by Email Rolando",
      bookingUrl: "mailto:rolando.neto@gmail.com",
      contactEmail: "rolando.neto@gmail.com",
      instagramUrl: "https://www.instagram.com/tattooink.se",
      instagramLabel: "Instagram @_barrau_",
      instagramHandleUrl: "https://www.instagram.com/_barrau_/",
      facebookUrl: "https://www.facebook.com/Tattoo-Ink-Stockholm-2105816132802255/",
    },
  ];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Tattoo Artists</h2>
          <p>Professional experienced tattoo artists.</p>
        </div>
        <div className="artists-sections">
          {artists.map((artist) => (
            <section
              key={artist.name}
              className={`artist-section ${
                artist.name === "Patricia Gea"
                  ? `artist-section-patricia ${hoveredArtist === "Patricia Gea" ? "hovering" : ""}`
                  : artist.name === "Rolando Barrau"
                  ? `artist-section-rolando ${hoveredArtist === "Rolando Barrau" ? "hovering" : ""}`
                  : ""
              }`}
              onMouseEnter={() => setHoveredArtist(artist.name)}
              onMouseLeave={() => setHoveredArtist(null)}
            >
              <div className="artist-main-circle" aria-hidden="true">
                {artist.name === "Patricia Gea" && (
                  <div className="artist-circle-image-container">
                    <img
                      src="img/patricia/IMG_9304.webp"
                      alt="Patricia Gea"
                      className="artist-circle-image artist-circle-image-default"
                    />
                    <img
                      src="img/patricia/IMG_9305.webp"
                      alt="Patricia Gea - Hover"
                      className="artist-circle-image artist-circle-image-hover"
                    />
                  </div>
                )}
                {artist.name === "Rolando Barrau" && (
                  <div className="artist-circle-image-container">
                    <img
                      src="img/rolando/foto2.webp"
                      alt="Rolando Barrau"
                      className="artist-circle-image artist-circle-image-default"
                    />
                    <img
                      src="img/rolando/IMG_1517.webp"
                      alt="Rolando Barrau - Hover"
                      className="artist-circle-image artist-circle-image-hover"
                    />
                  </div>
                )}
              </div>
              <h3 className="artist-section-title">{artist.name}</h3>
              <div className="artist-desc-wrap">
                {artist.compactText ? (
                  <p className="artist-desc artist-desc-compact">{artist.lines.join(" ")}</p>
                ) : (
                  artist.lines.map((line) => (
                    <p key={`${artist.name}-${line}`} className="artist-desc">
                      {line}
                    </p>
                  ))
                )}

                {artist.bookingUrl ? (
                  <div className="artist-booking-wrap">
                    <a
                      id={artist.name === "Patricia Gea" ? "book-patricia" : undefined}
                      style={artist.name === "Patricia Gea" ? { scrollMarginTop: '120px' } : undefined}
                      href={artist.bookingUrl}
                      target={artist.bookingUrl.startsWith("mailto:") ? undefined : "_blank"}
                      rel={artist.bookingUrl.startsWith("mailto:") ? undefined : "noreferrer"}
                      className="btn btn-custom btn-lg artist-book-btn"
                    >
                      {artist.bookingLabel}
                    </a>
                  </div>
                ) : null}

                {artist.contactLabel ? <p className="artist-desc">{artist.contactLabel}</p> : null}

                {artist.contactEmail ? (
                  <p className="artist-desc">
                    <a href={`mailto:${artist.contactEmail}`} className="artist-link">
                      {artist.contactEmail}
                    </a>
                  </p>
                ) : null}

                {artist.instagramLabel && artist.name === "Rolando Barrau" ? (
                  <p className="artist-desc artist-handle-line">
                    <a href={artist.instagramHandleUrl} target="_blank" rel="noreferrer" className="artist-link">
                      {artist.instagramLabel}
                    </a>
                  </p>
                ) : artist.instagramLabel ? (
                  <p className="artist-desc artist-handle-line">
                    <a href={artist.instagramUrl} target="_blank" rel="noreferrer" className="artist-link">
                      {artist.instagramLabel}
                    </a>
                  </p>
                ) : null}

                {artist.fineLineInstagramLabel ? (
                  <p className="artist-desc artist-handle-line">
                    <a href={artist.fineLineInstagramUrl} target="_blank" rel="noreferrer" className="artist-link">
                      {artist.fineLineInstagramLabel}
                    </a>
                  </p>
                ) : null}

              </div>
              <div className="artist-photo-grid" style={{ marginTop: '10px' }}>
                {artist.name === "Patricia Gea"
                  ? [1,2,3,4,5,6,7,8,9].map((num) => (
                      <div key={`patricia-tattoo-${num}`} className="artist-photo-circle" style={{cursor:'pointer'}} onClick={() => openTattooPopup(`img/patricia/tattoo/${num}.webp`)}>
                        <img
                          src={`img/patricia/tattoo/${num}.webp`}
                          alt={`Patricia tattoo ${num}`}
                          className="artist-photo-circle-image"
                        />
                      </div>
                    ))
                  : [
                      "1.webp",
                      "2.webp",
                      "5.webp",
                      "8.webp",
                      "9.webp",
                      "11.webp",
                      "12.webp",
                      "20.webp",
                      "IMG_2679.webp"
                    ].map((file) => (
                      <div key={`rolando-tattoo-${file}`} className="artist-photo-circle" style={{cursor:'pointer'}} onClick={() => openTattooPopup(`img/rolando/tattoo/${file}`)}>
                        <img
                          src={`img/rolando/tattoo/${file}`}
                          alt={`Rolando tattoo ${file}`}
                          className="artist-photo-circle-image"
                        />
                      </div>
                    ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
