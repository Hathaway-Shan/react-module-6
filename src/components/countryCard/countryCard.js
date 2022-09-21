import React from 'react';
import './countryCard.css';

export default function CountryCard({ name, iso2, continent }) {
  return (
    <div className="country-card">
      <img src={`https://flagcdn.com/${iso2.toLowerCase()}.svg`} width="80" />

      <div className="continent">continent: {continent}</div>
      <div className="title">{name}</div>
    </div>
  );
}
