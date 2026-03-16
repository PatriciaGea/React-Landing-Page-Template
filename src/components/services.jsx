import React, { useState } from "react";

export const Services = () => {
  const [isHovering, setIsHovering] = useState(false);

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
                  ? `artist-section-patricia ${isHovering ? "hovering" : ""}`
                  : ""
              }`}
              onMouseEnter={() => artist.name === "Patricia Gea" && setIsHovering(true)}
              onMouseLeave={() => artist.name === "Patricia Gea" && setIsHovering(false)}
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

                {artist.instagramLabel ? (
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

                <div className="artist-social-links">
                  <a href={artist.instagramUrl} target="_blank" rel="noreferrer" className="artist-link">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                  <a href={artist.facebookUrl} target="_blank" rel="noreferrer" className="artist-link">
                    <i className="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
              <div className="artist-photo-grid">
                {Array.from({ length: 9 }).map((_, index) => (
                  <div key={`${artist.name}-${index}`} className="artist-photo-circle"></div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
