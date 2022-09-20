import { useState, useEffect } from 'react';

import { fetchCountries } from '../services/countries';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchCountries();
      setCountries(data);
      console.log('inside useEffect ----->', data);
    }
    fetchData();
  }, []);

  return countries;
}
