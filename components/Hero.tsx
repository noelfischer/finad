import { Button } from '@/components/ui/button'
import Link from 'next/link'
import InteractiveDashboardDemo from './InteractiveDemo'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 xl:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Take Control of Your Finances with FinAd
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Track, analyze, and optimize your personal spending habits with our intuitive finance tracker, tailored for Swiss residents.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" asChild><Link href="/auth">Get Started</Link></Button>
              <Button variant="outline" size="lg" asChild><Link href="#how-it-works">Learn More</Link></Button>
            </div>
          </div>
          <div className="lg:w-1/2 mb-8 lg:pl-16 2xl:pl-48 w-full">
            <InteractiveDashboardDemo />
          </div>
        </div>
      </div>
      <p className="sm:hidden">sm</p>
      <p className="md:hidden">md</p>
      <p className="lg:hidden">lg</p>
      <p className="xl:hidden">xl</p>
      <p className="2xl:hidden">2xl</p>
    </section>
  )
}

