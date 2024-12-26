import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { PieChart, BarChart, Wallet, TrendingUp } from 'lucide-react'

const features = [
  {
    title: 'Personal Expense Tracking',
    description: 'Easily log and categorize your personal expenses to get a clear picture of your spending habits.',
    icon: Wallet,
  },
  {
    title: 'Swiss-Specific Budgeting',
    description: 'Set and manage budgets tailored to Swiss cost of living and financial practices.',
    icon: PieChart,
  },
  {
    title: 'Individual Financial Insights',
    description: 'Gain valuable insights into your personal financial health with detailed reports and analytics.',
    icon: BarChart,
  },
  {
    title: 'Personal Goal Setting',
    description: 'Set individual financial goals and track your progress towards achieving them.',
    icon: TrendingUp,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features to Manage Your Personal Finances in Switzerland</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

