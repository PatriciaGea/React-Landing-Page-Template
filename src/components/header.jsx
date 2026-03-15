import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 intro-text header-content-center">
                {props.data && props.data.title && props.data.title.includes("/") ? (
                  <img
                    src={props.data.title}
                    alt="Tattoo Ink Stockholm"
                    className="header-title-image"
                    style={{ marginTop: 40, marginBottom: -18 }}
                  />
                ) : (
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                )}
                <p style={{ marginTop: -20, marginBottom: 10 }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Book Your Tattoo
                </a>{" "}<br />
                <p className="header-address">
                  <br></br>Brännkyrkagatan 48, Södermalm Stockholm ( central area -
                  Mariatorget subway station)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
