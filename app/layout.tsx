import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header';
import Page from '@/app/page';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael | Porfolio',
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative max-w-full h-[5000px] pt-[5.5rem] sm:pt-32 overflow-x-hidden`}>
        
        <div className='bg-[#fbe2e3] absolute blur-[10rem] 
        top-[-6rem] right-[11rem] h-[32rem] w-[32rem] -z-10
        rounded-full sm:w-[68rem] '></div>

        <div className='bg-[#dbd7fb] absolute blur-[10rem] 
        top-[-1rem] left-[-35rem] h-[32rem] w-[50rem] -z-10
        rounded-full sm:w-[68rem] md:left-[-33rem] lg:left[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>


        <Header />
        {children}
        
        </body>
    </html>
  )
}
