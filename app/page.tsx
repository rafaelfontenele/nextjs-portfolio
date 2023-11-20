"use client";

import Home from '@/components/Home';
import SectionDivider from '@/components/Section-Divider';
import About from  '@/components/About';
import Projects from  '@/components/Projects';
import { useEffect } from 'react';


export default function Page() {
  
  return (

    <main className='flex flex-col items-center px-4 sm:px-0'>
      
      <Home />
      <SectionDivider />
      <About />
      <Projects />


    </main>    




    )
}
