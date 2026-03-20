import { useState } from "react";
import emailjs from '@emailjs/browser';
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    // replace below with your own Service ID, Template ID and Public Key from your EmailJS account
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      {/* Booking Form Section */}
      <div id="booking">
        <div className="container" style={{ padding: '48px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: 340, minWidth: 0, margin: '0 auto' }}>
            <div className="row" style={{ margin: 0 }}>
              <div className="section-title text-center">
                <div style={{ paddingTop: '48px' }}>
                  <h2>Send message to the studio</h2>
                  <div style={{ fontSize: '15px', color: '#888', marginBottom: 10 }}>
                    for bookings send msg directly to the tattoo artist Patricia Gea or Rolando Barrau otherwise write to the studio
                  </div>
                </div>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit} encType="multipart/form-data" style={{ width: '100%' }}>
                <div className="row" style={{ margin: 0 }}>
                  <div className="col-md-6" style={{ padding: 0 }}>
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6" style={{ padding: 0 }}>
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="What you would like to tattoo? Body placement and when?"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <label htmlFor="attachment">Attach your reference pictures</label>
                  <input
                    type="file"
                    id="attachment"
                    name="attachment"
                    className="form-control"
                    accept="image/*,application/pdf"
                  />
                </div>
                <div id="success"></div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="location">
        <div className="container">
          <div className="section-title text-center">
            <h2 style={{ color: '#fff', fontSize: window.innerWidth > 600 ? 36 : 22 }}>Our Location</h2>
            <div style={{ fontWeight: 400, color: '#111', fontSize: '13px', marginBottom: 2 }}>(Bookings only)</div>
            <p>
              Brännkyrkagatan 48, Södermalm Stockholm ( central area -
              Mariatorget subway station)
            </p>
            <div style={{ marginBottom: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
              <a href="https://share.google/hNWEBvqU892N6TvNe" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 17, color: '#4285F4', textDecoration: 'none' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303C33.973 32.833 29.373 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c2.73 0 5.23.936 7.217 2.482l6.086-6.086C33.527 6.053 28.973 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20c11.045 0 19.824-8.955 19.824-20 0-1.341-.138-2.651-.213-3.917z"/><path fill="#34A853" d="M6.306 14.691l6.571 4.819C14.655 16.104 19.001 13 24 13c2.73 0 5.23.936 7.217 2.482l6.086-6.086C33.527 6.053 28.973 4 24 4c-7.732 0-14.41 4.41-17.694 10.691z"/><path fill="#FBBC05" d="M24 44c5.319 0 10.18-1.819 13.963-4.955l-6.457-5.309C29.374 36.833 24.001 36 24.001 36c-5.373 0-9.973-3.167-11.303-8H6.306C8.59 39.59 15.268 44 24 44z"/><path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.303c-1.13 3.633-4.73 8-11.303 8-5.373 0-9.973-3.167-11.303-8H6.306C8.59 39.59 15.268 44 24 44c4.973 0 9.527-2.053 12.824-5.691l-.001-.001z"/></g></svg>
                </span>
                <span>View on Google - Tattoo Ink Studio</span>
              </a>
              <a href="https://share.google/upkI2oQf0dGcy09Hz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 17, color: '#4285F4', textDecoration: 'none' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.73 1.23 9.24 3.25l6.91-6.91C36.36 2.36 30.47 0 24 0 14.61 0 6.44 5.98 2.69 14.69l8.06 6.26C12.7 14.7 17.89 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-2.09-.21-4.12-.6-6.06H24v9.56h12.44c-.54 2.89-2.18 5.34-4.66 7.01l7.23 5.63C43.98 36.02 46.1 30.7 46.1 24.5z"/><path fill="#FBBC05" d="M24 46.5c6.47 0 12.36-2.36 16.15-6.25l-7.23-5.63c-2.01 1.36-4.59 2.18-8.92 2.18-6.11 0-11.3-5.2-13.25-12.45l-8.06 6.26C6.44 42.02 14.61 46.5 24 46.5z"/><path fill="#EA4335" d="M7.31 14.69C5.8 17.7 5 21 5 24.5s.8 6.8 2.31 9.81l8.06-6.26C14.7 34.3 19.89 39.5 24 39.5c3.54 0 6.73-1.23 9.24-3.25l6.91 6.91C36.36 46.64 30.47 49 24 49c-9.39 0-17.56-5.98-21.31-14.69z"/></g></svg>
                </span>
                <span>View on Google - Patricia Gea Tattoo Artist</span>
              </a>
            </div>
          </div>
          <div className="location-map-wrap">
            <iframe
              title="Tattoo Ink Studio Location"
              src="https://www.google.com/maps?q=Br%C3%A4nnkyrkagatan%2048%2C%20S%C3%B6dermalm%20Stockholm%20(Mariatorget%20subway%20station)&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* Social media section agora após o mapa, com gradiente e copyright */}
      <div className="contact-social-gradient">
        <div className="container footer-responsive">
          <div className="footer-col">
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Studio Tattoo Ink Project:</div>
            <div style={{ marginBottom: 6 }}>Instagram SWE: <a href="https://www.instagram.com/@tattooink.se" target="_blank" rel="noreferrer" className="footer-link">@tattooink.se</a></div>
            <div style={{ marginBottom: 6 }}>Facebook: <a href="https://www.facebook.com/p/Tattoo-Ink-Stockholm-100031897282405/" target="_blank" rel="noreferrer" className="footer-link">Tattoo Ink Stockholm</a></div>
            <div style={{ marginBottom: 6 }}>Instagram BR: <a href="https://www.instagram.com/@estudiotattooink" target="_blank" rel="noreferrer" className="footer-link">@estudiotattooink</a></div>
          </div>
          <div className="footer-col">
            <div style={{ fontWeight: 700, marginBottom: 10 }}>Patricia Gea</div>
            <div style={{ marginBottom: 6 }}>Gea Tattoo ink AB</div>
            <div style={{ marginBottom: 6 }}>
              LinkedIn: <a href="https://www.linkedin.com/in/patriciageafrontend/" target="_blank" rel="noreferrer" className="footer-link">patriciageafrontend</a>
            </div>
            <div style={{ marginBottom: 6 }}>
              GitHub: <a href="https://github.com/PatriciaGea" target="_blank" rel="noreferrer" className="footer-link">PatriciaGea</a>
            </div>
          </div>
        </div>
      </div>
      {/* Rodapé removido, copyright já incluso na seção de social media */}
    </div>
  );
};
