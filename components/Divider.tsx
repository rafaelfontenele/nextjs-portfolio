'use client';

import React from 'react'
import { motion } from 'framer-motion';

export default function Divider() {
  return (

        <motion.div
          initial={ {opacity: 0, y: 100} } 
          animate={ {opacity: 1, y: 0} } 
          transition= { {delay: 3, duration: 0.8} }
          className='bg-[#e5e7ebb3] my-24 h-20 w-1 rounded-full hidden sm:block'
        ></motion.div>
    )
}
