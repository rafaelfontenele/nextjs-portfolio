import React from 'react'
import Image from 'next/image';
import randomGuyImage from '../public/randomGuy.jpg'

export default function Home() {
  return (
    <section>

        <div className="div">
            <Image src={randomGuyImage} alt='Personal profile picture' className='w-[200px] absolute border-2 border-red-400 top-[10rem] left-[40rem] bg-cover rounded-full aspect-square '/>
        </div>        

    </section>
    )
}
