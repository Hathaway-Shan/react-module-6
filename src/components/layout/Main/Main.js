import React from 'react';
import CountryCard from '../../countryCard/countryCard';
import useCountries from '../../../hooks/useCountries';

export default function Main() {
  return (
    <main>
      {useCountries().map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
