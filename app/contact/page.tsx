import Header from '@/components/Header'
import Footer from '@/components/Footer'

import Founders from '@/components/Founders'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'FinAd - Contact Us',
  description: 'Get in touch with FinAd for inquiries, support, or investment opportunities.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="pt-20 pb-16">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Have questions or want to learn more about FinAd? We&apos;re here to help. Reach out to us using the form below or through our contact information.
            </p>
            
            <h2 className="text-3xl font-bold text-center mb-8">Meet Our Founders</h2>
            <Founders />
            <div className="max-w-4xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

