import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-gray-200 flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href="/slide-show/">SlideShow</Link>
      <Link href="/overlay-loginform/">Overlay Login Form</Link>
      <Link href="/accordian/">Accordian</Link>



      
    </main>
  )
}
