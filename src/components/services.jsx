import React from "react";

export const Services = () => {
  const artists = ["Patricia Gea", "Rolando Barrau"];

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Meet the Artists</h2>
          <p>Meet the Artists</p>
        </div>
        <div className="row artists-row">
          {artists.map((name) => (
            <div key={name} className="col-xs-12 col-md-6">
              <div className="artist-circle">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
