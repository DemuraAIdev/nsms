import './globals.css'
import { Inconsolata } from 'next/font/google'
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NSMS',
  description: 'Nexa School Management System (Still in development)',
}


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className='bg-green-500 text-white'>
        <Navbar />
        <div className={"flex min-h-screen flex-col mx-10"}>

          <div className=''>
            {children}
          </div>
        </div>
        <Footer />
      </body>

    </html>
  )
}
