import InteractiveDashboardDemo from "@/components/InteractiveDemo"
import FAQ from "../components/FAQ"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Pricing from "../components/Pricing"
import Testimonials from "../components/Testimonials"


export const metadata = {
  title: 'FinAd - Take Control of Your Finances in Switzerland',
  description: 'Track, analyze, and optimize your personal spending habits with our intuitive finance tracker, tailored for individuals in Switzerland.',
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

