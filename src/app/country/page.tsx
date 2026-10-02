import CountryTable from '@/components/CountryTable';
import { fetchCountryList } from '@/services/country.service';

export default async function CountryPage() {

  const countries = await fetchCountryList();

  return (
    <main>
      <h1 className='text-4xl text-pink-600'>Liste des pays</h1>
      <CountryTable countries={countries} />
    </main>
  );
}
