import Image from 'next/image'

const steps = [
  {
    title: 'Sign Up',
    description: 'Create your account in minutes and connect your bank accounts securely.',
  },
  {
    title: 'Track Expenses',
    description: 'Automatically categorize your transactions and add custom tags for detailed tracking.',
  },
  {
    title: 'Analyze & Plan',
    description: 'Get insights into your spending habits and create budgets to reach your financial goals.',
  },
  {
    title: 'Optimize & Grow',
    description: 'Receive personalized recommendations to optimize your finances and grow your wealth.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How FinAd Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 bg-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="order-first md:order-last mb-8 md:mb-0">
            <Image
              src="/how_it_works.jpg?height=400&width=600"
              alt="How FinAd Works"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

