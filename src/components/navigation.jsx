import React, { useEffect, useState } from "react";

export const Navigation = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowNavbar(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${
        showNavbar ? "nav-visible" : "nav-hidden"
      }`}
    >
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll brand-wrap" href="#page-top">
            <img
              src="img/studio/letrat.webp"
              className="navbar-studio-logo"
              alt="Tattoo Ink Studio"
            />
            <span className="brand-title">Tattoo Ink Studio</span>
          </a>

        
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Tattoo Artists
              </a>
            </li>
            <li>
              <a href="#location" className="page-scroll">
                Address
              </a>
            </li>
            <li>
              <a href="#booking" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <a href="#book-patricia" className="page-scroll">
                Booking
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
