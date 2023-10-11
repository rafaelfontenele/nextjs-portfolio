"use client";

import Home from '@/components/Home';
import Divider from '@/components/Divider';
import About from  '@/components/About';
import { useEffect } from 'react';

export default function Page() {
  
  return (

    <main className='flex flex-col items-center px-4 sm:px-0'>
      
      <Home />
      <Divider />
      <About />


    </main>    




    )
}
