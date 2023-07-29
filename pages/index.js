import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex h-40 bg-gray-200  items-center flex-col justify-between }`}
    >
      <Link href="/slide-show/">SlideShow</Link>
      <Link href="/overlay-loginform/">Overlay Login Form</Link>
      <Link href="/accordian/">Accordian</Link>
      <Link href="/side-navbar/">sidenavbar</Link>
      <Link href="/carousel/">Carousel</Link>


      
    </main>
  )
}
