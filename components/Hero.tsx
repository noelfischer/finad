import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Take Control of Your Finances with FinAd
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Track, analyze, and optimize your personal spending habits with our intuitive finance tracker, tailored for Swiss residents.
            </p>
            <div className="flex space-x-4">
              <Button size="lg">Get Started</Button>
              <Link href="#how-it-works"><Button variant="outline" size="lg">Learn More</Button></Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero_image.jpg?height=400&width=600"
              alt="FinAd Dashboard"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

