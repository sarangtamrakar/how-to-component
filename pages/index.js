import Image from 'next/image'
import Link from 'next/link'


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
      <Link href="/infine-scroll/">infine-scroll</Link>
      <Link href="/health-check/">HealthCheck</Link>
      <Link href="/swipper-carousel/">Swipper Page</Link>
      <Link href="/use-reducer-concept/">useReducer Page</Link>
      <Link href="/progress-bar/">Progressbar Page</Link>
      <Link href="/auto-suggestion/">Auto Suggestion Page</Link>
    </main>
  )
}
