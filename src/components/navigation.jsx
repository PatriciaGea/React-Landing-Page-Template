import React, { useEffect, useState, useRef } from "react";

export const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const navItems = React.useMemo(() => [
    { id: "about", label: "About" },
    { id: "services", label: "Tattoo Artists" },
    { id: "location", label: "Address" },
    { id: "booking", label: "Contact" },
    { id: "booking-artists-anchor", label: "Booking" },
  ], []);

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
    // Fecha menu ao clicar fora
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navItems]);

  const handleNavLinkClick = () => setMenuOpen(false);
  const handleToggle = () => setMenuOpen((open) => !open);
  return (
    <nav
      id="menu"
      className={`navbar navbar-default navbar-fixed-top ${
        showNavbar ? "nav-visible" : "nav-hidden"
      }`}
      ref={navRef}
    >
      <div className="container">
        <div className="navbar-header" style={{display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', width: '100%'}}>
          <button
            type="button"
            className={`navbar-toggle${menuOpen ? '' : ' collapsed'}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
            style={{marginLeft: 'auto'}}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll brand-wrap" href="#page-top" style={{marginRight: 'auto'}}>
            <img
              src="img/studio/letrat.webp"
              className="navbar-studio-logo"
              alt="Tattoo Ink Studio"
            />
            <span className="brand-title">Tattoo Ink Studio</span>
          </a>
        </div>
        <div
          className={`navbar-collapse${menuOpen ? ' in' : ' collapse'}`}
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {navItems.map((item) => (
              <li key={item.id} className={activeSection === item.id ? "active" : ""}>
                <a href={`#${item.id}`} className="page-scroll" onClick={handleNavLinkClick}>
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
