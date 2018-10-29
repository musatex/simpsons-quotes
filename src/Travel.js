import React from "react";

const Travel = ({destination, country, photo, distance}) => (
  <figure>
    <img src={photo} alt="Mexico" />
    <figcaption>
      <blockquote>
      {destination}
      {country}
      {distance}
      </blockquote>
      <cite>Bon voyage!</cite>
    </figcaption>
  </figure>
);
