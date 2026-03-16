import React from "react";

export const About = (props) => {
  const locationText = "Mariatorget, Södermalm";

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/studio/estudio.webp" className="img-responsive" alt="" />{" "}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
