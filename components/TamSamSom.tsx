import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

const marketData = [
  {
    title: 'Total Addressable Market (TAM)',
    description: 'All individuals managing personal finances globally',
    value: 5000000000,
    color: 'bg-blue-500',
  },
  {
    title: 'Serviceable Addressable Market (SAM)',
    description: 'Adult population in Switzerland (ages 18-65)',
    value: 5700000,
    color: 'bg-green-500',
  },
  {
    title: 'Serviceable Obtainable Market (SOM)',
    description: 'Realistic market share we can capture in Switzerland in the next 3-5 years',
    value: 570000,
    color: 'bg-yellow-500',
  },
]

export default function TamSamSom() {
  const formatValue = (value: number) => {
    if (value >= 1000000000) {
      return `${(value / 1000000000).toFixed(1)}B`
    } else if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`
    } else {
      return value.toLocaleString()
    }
  }

  const maxValue = Math.max(...marketData.map(item => item.value))

  return (
    <section id="market-size" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Market Opportunity</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {marketData.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <div className="text-4xl font-bold mb-2">{formatValue(item.value)}</div>
                <Progress value={(item.value / maxValue) * 100} className={item.color} />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our market analysis shows significant growth potential in the personal finance management sector in Switzerland. 
            With our innovative features tailored to Swiss financial needs and a user-friendly interface, FinAd is well-positioned 
            to capture a substantial portion of this market over the next few years.
          </p>
        </div>
      </div>
    </section>
  )
}

