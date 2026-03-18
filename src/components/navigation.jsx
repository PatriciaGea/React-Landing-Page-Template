import React, { useEffect, useState, useRef } from "react";

export const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Tattoo Artists" },
    { id: "location", label: "Address" },
    { id: "booking", label: "Contact" },
    { id: "booking-artists-anchor", label: "Booking" },
  ];
    const [lang, setLang] = useState("en");
    const LANGS = [
      { code: "en", label: "English" },
      { code: "pt", label: "Português" },
      { code: "es", label: "Español" },
      { code: "fr", label: "Français" },
      { code: "de", label: "Deutsch" },
      { code: "sv", label: "Svenska" },
      { code: "fi", label: "Suomi" },
    ];
    const TRANSLATIONS = {
      en: {
        nav: ["About", "Tattoo Artists", "Address", "Contact", "Booking"],
      },
      pt: {
        nav: ["Sobre", "Tatuadores", "Endereço", "Contato", "Agendamento"],
      },
      es: {
        nav: ["Sobre", "Tatuadores", "Dirección", "Contacto", "Reservas"],
      },
      fr: {
        nav: ["À propos", "Tatoueurs", "Adresse", "Contact", "Réservation"],
      },
      de: {
        nav: ["Über", "Tätowierer", "Adresse", "Kontakt", "Buchung"],
      },
      sv: {
        nav: ["Om", "Tatuerare", "Adress", "Kontakt", "Boka"],
      },
      fi: {
        nav: ["Tietoa", "Tatuoijat", "Osoite", "Yhteys", "Varaus"],
      },
    };

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
  }, []);

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
        <div className="navbar-header">
          <button
            type="button"
            className={`navbar-toggle${menuOpen ? '' : ' collapsed'}`}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
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
            <li className="dropdown" style={{ position: 'relative' }}>
              <button
                className="btn btn-default dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ background: 'none', border: 'none', fontWeight: 600, fontSize: 15, textTransform: 'uppercase', color: '#555', margin: '9px 20px 0', padding: '8px 2px', cursor: 'pointer' }}
                tabIndex={0}
                onClick={e => e.stopPropagation()}
              >
                Language <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown" style={{ minWidth: 120, left: 'auto', right: 0 }}>
                <li><a href="#" style={{ color: '#c0a16b' }}>English</a></li>
                <li><a href="#" style={{ color: '#c0a16b' }}>Português</a></li>
                <li><a href="#" style={{ color: '#c0a16b' }}>Español</a></li>
                <li><a href="#" style={{ color: '#c0a16b' }}>Français</a></li>
                <li><a href="#" style={{ color: '#c0a16b' }}>Deutsch</a></li>
                <li><a href="#" style={{ color: '#c0a16b' }}>Svenska</a></li>
                <li><a href="#" style={{ color: '#c0a16b' }}>Suomi</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
