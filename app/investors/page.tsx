import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, PieChart, Users, DollarSign, Check } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import PrototypeDemo from '@/components/PrototypeDemo'

export const metadata = {
    title: 'FinAd - Investor Information',
    description: 'Discover the investment potential of FinAd, the leading personal finance management platform in Switzerland.',
}

export default function InvestorPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <Header />
            <main className="pt-20 pb-16">
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Invest in the Future of Personal Finance</h1>
                        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Join us in revolutionizing how Swiss residents manage their finances. FinAd is poised for exponential growth in the booming fintech market.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Users className="mr-2" /> Market Size
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold">5.7M</p>
                                    <p className="text-sm text-gray-500">Potential users in Switzerland</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <TrendingUp className="mr-2" /> Growth Rate
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold">35%</p>
                                    <p className="text-sm text-gray-500">Year-over-year user growth</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <DollarSign className="mr-2" /> Revenue Potential
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold">$50M</p>
                                    <p className="text-sm text-gray-500">Potential revenue in the swiss market</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <PieChart className="mr-2" /> Market Share
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-3xl font-bold">15%</p>
                                    <p className="text-sm text-gray-500">Target market share in 3 years</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Growth Strategy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Market Penetration</h3>
                                        <p className="text-gray-600">Aggressive marketing campaigns targeting Swiss residents aged 25-45, focusing on major cities like Zurich, Geneva, and Basel.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Product Development</h3>
                                        <p className="text-gray-600">Continuous improvement of our AI-driven financial insights and introduction of new features based on user feedback and market trends.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">Strategic Partnerships</h3>
                                        <p className="text-gray-600">Collaborations with major Swiss banks and financial institutions to expand our user base and enhance our service offerings.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold mr-4">
                                        4
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-2">International Expansion</h3>
                                        <p className="text-gray-600">Planned expansion into neighboring European countries, starting with Germany and France, by 2027.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="order-first md:order-last mb-8 md:mb-0">
                                <Image
                                    src="/dev.jpg?height=400&width=600"
                                    alt="FinAd Growth Strategy"
                                    width={600}
                                    height={400}
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Prototype Demo</h2>
                        <div className="max-w-4xl mx-auto">
                            <PrototypeDemo />
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Freemium Model & Premium Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Freemium Version</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-green-500" />
                                            Basic expense tracking
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-green-500" />
                                            Monthly budget setting
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-green-500" />
                                            Limited financial insights
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-green-500" />
                                            One analysis per month
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Premium Features</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-blue-500" />
                                            Advanced AI-driven financial insights
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-blue-500" />
                                            Unlimited analysis
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-blue-500" />
                                            Investment tracking and recommendations
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-blue-500" />
                                            Personalized financial advisor chatbot
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-blue-500" />
                                            Tax optimization suggestions
                                        </li>
                                        <li className="flex items-center">
                                            <Check className="mr-2 text-blue-500" />
                                            Early access to new features
                                        </li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Invest in FinAd?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Market Leadership</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>FinAd is positioned to become the leading personal finance management platform in Switzerland, with plans for European expansion.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Innovative Technology</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Our AI-driven insights and user-friendly interface set us apart from traditional financial management tools.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Strong Growth Potential</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>With a rapidly expanding user base and multiple revenue streams, FinAd offers significant return on investment.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Detailed Financial Projections</h2>
                        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>2025 Projections</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li>Total Users: 570 Thousand</li>
                                        <li>Premium Conversion Rate: 15%</li>
                                        <li>Annual Revenue: $6 million</li>
                                        <li>EBITDA Margin: 25%</li>
                                        <li>Market Share: 10%</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>2026 Projections</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li>Total Users: 850 Thousand</li>
                                        <li>Premium Conversion Rate: 18%</li>
                                        <li>Annual Revenue: $10 million</li>
                                        <li>EBITDA Margin: 30%</li>
                                        <li>Market Share: 15%</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Key Growth Drivers</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li>Expansion into Germany and France markets</li>
                                        <li>Launch of advanced AI-powered financial advisory features</li>
                                        <li>Strategic partnerships with major European banks</li>
                                        <li>Increased marketing spend to capture market share</li>
                                        <li>Introduction of B2B offerings for small businesses</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>2027+ Projections</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        <li>Total Users: 1.15 Million</li>
                                        <li>Premium Conversion Rate: 20%</li>
                                        <li>Annual Revenue: $15 million</li>
                                        <li>EBITDA Margin: 35%</li>
                                        <li>Market Share: 20%</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="mt-12 text-center">
                            <Button size="lg" asChild>
                                <Link href="/contact">Request Detailed Investor Package</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

