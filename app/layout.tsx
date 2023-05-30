import './globals.css'
import { Inconsolata } from 'next/font/google'
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// TODO: Add session provider
//import { SessionProvider } from "next-auth/react"
//import type { Session } from 'next-auth'

const inter = Inconsolata({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NSMS',
  description: 'Nexa School Management System (Still in development)',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className=' bg-green-400 text-white'>
        <div className={"flex min-h-screen flex-col mx-10"}>
          <Navbar />
          {children}
        </div>
        <Footer />
      </body>

    </html>
  )
}
