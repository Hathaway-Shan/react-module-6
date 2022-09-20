import { useState, useEffect } from 'react';

import { fetchCountries } from '../services/countries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        //testing this means breaking something in the supabase query
        //in the services layer
        const data = await fetchCountries();
        setCountries(data);
      } catch (e) {
        setError(e.message);
      }
    }
    fetchData();
  }, []);
  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };
  return { filterCountries, continent, setContinent, error };
}
