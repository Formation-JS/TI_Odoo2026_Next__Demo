import Image from 'next/image';

export default function AboutPage() {

  return (
    <main>
      <h1 className='text-4xl text-pink-600'>A propos</h1>

      <p>Comme cette image le montre, on aime le design !</p>
      <Image
        src='/graphic-design-landscape.png'
        alt='My passion !'
        width={6144}
        height={4096}
        quality={25}
        className='hidden md:block'
        />
      <Image
        src='/graphic-design-portait.png'
        alt='My passion !'
        width={1200}
        height={2048}
        quality={50}
        className='block md:hidden'
        />
    </main>
  );
}
