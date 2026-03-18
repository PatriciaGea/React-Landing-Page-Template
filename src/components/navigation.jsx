import React, { useEffect, useState } from "react";

export const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Tattoo Artists" },
    { id: "location", label: "Address" },
    { id: "booking", label: "Contact" },
    { id: "booking-artists-anchor", label: "Booking" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setShowNavbar(window.scrollY > 80);
      // Detect section in view
      const offsets = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, offset: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, offset: Math.abs(rect.top - 120) };
      });
      const min = offsets.reduce((a, b) => (a.offset < b.offset ? a : b));
      setActiveSection(min.id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
            {navItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                <a href={`#${item.id}`} className="page-scroll">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
