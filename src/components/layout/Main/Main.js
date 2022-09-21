import React from 'react';
import CountryCard from '../../countryCard/countryCard';
import useCountries from '../../../hooks/useCountries';
import Filter from '../../Filter/Filter';

export default function Main() {
  const { filterCountries, continent, setContinent, error, loading } = useCountries();
  return (
    <main>
      <Filter continent={continent} setContinent={setContinent} />
      <span>{loading ? <>loading...</> : <></>}</span>
      <div>
        {filterCountries().map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </div>
      <p>{error}</p>
    </main>
  );
}
