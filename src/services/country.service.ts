import { CountryDetail, CountryDetailResponseData, CountryListItem, CountryListResponseData } from '@/@types/country';

export async function fetchCountryList(): Promise<CountryListItem[]> {
    const url = 'https://api.restcountries.com/countries/v5?response_fields=names.common,codes.alpha_2,flag.emoji&pretty=1';

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY_RESTCOUNTRY}`
        }
    });

    if (!response.ok) {
        throw new Error(`Fetch error : ${response.status}`);
    }

    const { data } = await response.json() as CountryListResponseData;

    return data.objects.map(o => ({
        name: o.names.common,
        code: o.codes.alpha_2,
        flag: o.flag.emoji
    }));
}


export async function fetchCountryByCode(code: string) : Promise<CountryDetail> {
    const url = `https://api.restcountries.com/countries/v5?codes.alpha_2={code}&pretty=1`;

    const response = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${process.env.API_KEY_RESTCOUNTRY}`
        }
    });

    if (!response.ok) {
        throw new Error(`Fetch error : ${response.status}`);
    }

    const { data } = await response.json() as CountryDetailResponseData;
    const country = data.objects[0];

    // Mapping des données de la WebAPI
    return {
        name: {
            native: Object.values(country.names.native).map(n => n.common),
            fr: country.names.translations.fra.common ?? country.names.official
        },
        region: country.region,
        coordinates: country.coordinates,
        capital: country.capitals.find(c => c.attributes.primary)?.name ?? "Inconnu",
        code: country.codes.alpha_2,
        area: country.area.kilometers,
        population: country.population,
        currencies: country.currencies
    }
}