import { useState, useEffect } from 'react';

import { fetchCountries } from '../services/countries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
    }
    fetchData();
  }, []);
  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };
  return { filterCountries, continent, setContinent };
}
