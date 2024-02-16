"use client";

import React, { useState, createContext } from 'react'
import { sections } from '@/lib/data';

type SectionName = typeof sections[number]['name']

type CurrentSectionContextType = {
    currentSection: SectionName;
    setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

const  CurrentSectionContext = createContext<CurrentSectionContextType | null>(null);

export default function CurrentSectionContextProvider( children: React.ReactNode) {


    const [currentSection, setCurrentSection] = useState<SectionName>('Home');
    
    return 
        (
        <CurrentSectionContext.Provider 
        value={{
            currentSection,
            setCurrentSection,
        }}
        >
            {children}

            
        </CurrentSectionContext.Provider>
        
        );
}
