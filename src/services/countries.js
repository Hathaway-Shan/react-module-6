import { checkError, client } from './client';

export async function fetchCountries() {
  const response = await client.from('countries').select('*');
  console.log('inside fetchCountries ------->', response);
  return checkError(response);
}
