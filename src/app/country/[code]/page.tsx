import { fetchCountryByCode } from '@/services/country.service';
import { notFound } from 'next/navigation';

type CountryDetailPageProps = {
    params: Promise<{ code: string; }>;
};
export default async function CountryDetailPage({ params }: CountryDetailPageProps) {

    const code = (await params).code;

    const country = await fetchCountryByCode(code);
     if(!country) {
        notFound();
    }

    return (
        <main>
            <h1 className='text-4xl text-pink-600'>Détail {country.name.fr}</h1>
            <p>Nom du pays : {country.name.native.join(' ')}</p>
            <p>Capital : {country.capital}</p>
            <p>Population : {country.population}</p>
        </main>
    );
}
