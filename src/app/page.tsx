import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col items-center justify-center p-10 h-screen'>
        <div className='flex flex-col lg:flex-row items-center justify-center'>
          <div className='lg:pr-10'>
            <div className='w-44 lg:w-60 h-44 lg:h-60'>
              <Image
                priority
                src={'/profileImg.jpeg'}
                width={4032}
                height={3024}
                alt='Profile image'
                className='object-cover w-full h-full rounded-full'
              />
            </div>
          </div>
          <h1 className='pt-5 lg:pt-0 font-mono text-2xl text-center lg:text-left'>
            Hey, I&apos;m a computer science graduate!
          </h1>
        </div>
        <Link href='/portfolio' className='hover:text-teal-600 py-10 flex flex-row items-center justify-center'>
          <h1 className='font-mono text-xl pr-1'>
            See my work
          </h1>
          <MdOutlineArrowForwardIos />
        </Link>
      </div>
    </main>
  );
}
