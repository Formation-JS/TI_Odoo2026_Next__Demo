import Link from 'next/link';
import countryLogo from './country-logo.png';
import Image from 'next/image';

export default function Header() {
    // TODO On va devoir corrigé des trucs =D

    return (
        <header className='flex flex-row justify-between h-16 bg-green-400 items-center p-1'>
            <Image
                className='object-contain h-full w-auto'
                src={countryLogo}
                alt='Country logo'
                width={465}
                height={536}
            />
            <nav>
                <ul className='flex flex-row gap-5 text-xl text-pink-900'>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/country">Pays</Link>
                    </li>
                    <li>
                        <Link href="/guestbook">Livre d'or</Link>
                    </li>
                    <li>
                        <Link href="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}