import { useState, useEffect } from 'react';

import { fetchCountries } from '../services/countries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [continent, setContinent] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        //testing this means breaking something in the supabase query
        //in the services layer
        const data = await fetchCountries();
        setCountries(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  const filterCountries = () => {
    if (continent === 'All') return countries;
    return countries.filter((country) => country.continent === continent);
  };
  return { filterCountries, continent, setContinent, error, loading };
}
