import { CountryListItem } from '@/@types/country';
import Link from 'next/link';

type CountryTableProps = {
    countries: CountryListItem[]
};
export default function CountryTable({ countries } : CountryTableProps) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Drapeau</th>
                    <th>Code</th>
                    <th>Nom du pays</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {countries.map(c => (
                    <CountryTableRow {...c} key={c.code} />
                ))}
            </tbody>
        </table>
    )
}

type CountryTableRowProps = CountryListItem & { 
    example?: string
}
function CountryTableRow({ code, name, flag } : CountryTableRowProps) {
    return (
        <tr>
            <td>{flag}</td>
            <td>{code}</td>
            <td>{name}</td>
            <td>
                <Link href={`/country/${code}`}>Detail</Link>
            </td>
        </tr>
    )
}