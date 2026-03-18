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
                  />
                ) : (
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                )}
                <p className="header-main-text">
                  {props.data ? props.data.paragraph : "Loading"}
                </p>
                <a
                  href="#services"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Book Your Tattoo
                </a>{" "}<br />
                <p className="header-address">
                  <br /><br />Brännkyrkagatan 48, Södermalm Stockholm ( central area -
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
