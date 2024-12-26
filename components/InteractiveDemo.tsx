'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { PieChart, Wallet, TrendingUp } from 'lucide-react'

const initialCategories = [
    { name: 'Housing', color: 'bg-blue-500/70', amount: 2000, percentage: 40 },
    { name: 'Food', color: 'bg-green-500/70', amount: 1500, percentage: 30 },
    { name: 'Transportation', color: 'bg-yellow-500/70', amount: 1000, percentage: 20 },
    { name: 'Entertainment', color: 'bg-purple-500/70', amount: 300, percentage: 6 },
    { name: 'Utilities', color: 'bg-red-500/70', amount: 200, percentage: 4 },
]

export default function InteractiveDashboardDemo() {
    const [income, setIncome] = useState(5400)
    const [categories, setCategories] = useState(initialCategories)
    const [savings, setSavings] = useState(0)

    useEffect(() => {
        const totalExpenses = categories.reduce((sum, category) => sum + category.amount, 0)
        const newSavings = income - totalExpenses
        setSavings(newSavings)

        const newCategories = categories.map(category => ({
            ...category,
            percentage: (category.amount / income) * 100
        }))
        setCategories(newCategories)
    }, [income])

    const handleIncomeChange = (newIncome: number[]) => {
        setIncome(newIncome[0])
    }

    const totalExpenses = categories.reduce((sum, category) => sum + category.amount, 0)
    const savingsPercentage = ((income - totalExpenses) / income) * 100

    return (
        <div className="bg-white/50 p-6 shadow-xl rounded-xl max-w-3xl mx-auto">
            <div className="space-y-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Wallet className="mr-2" /> Monthly Income
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <p className="text-2xl font-bold">CHF {income.toFixed(2)}</p>
                            <Slider
                                value={[income]}
                                onValueChange={handleIncomeChange}
                                max={10000}
                                step={100}
                                className="w-full"
                            />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <PieChart className="mr-2" /> Generated Expense Breakdown
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {categories.map(category => (
                                <div key={category.name} className="mb-2">
                                    <div className="relative h-10">
                                        <Progress value={category.percentage} className={`h-10 ${category.color}`} />
                                        <div className="absolute inset-0 flex justify-between items-center px-3 text-white">
                                            <span>{category.name}</span>
                                            <span className='font-bold'>CHF {category.amount.toFixed(2)} {isFinite(category.percentage) && <>({category.percentage.toFixed(1)}%)</>}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <TrendingUp className="mr-2" /> Savings Projection
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="relative h-10">
                                <Progress value={Math.max(0, savingsPercentage)} className="h-10 bg-indigo-500/70" />
                                <div className="absolute inset-0 flex justify-between items-center px-3 text-white">
                                    <span className="font-bold">Savings</span>
                                    <span className="font-bold">
                                        CHF {savings.toFixed(2)} {isFinite(savingsPercentage) && <>({savingsPercentage.toFixed(1)}%)</>}
                                    </span>
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">
                                {savings >= 0
                                    ? `You're saving CHF ${savings.toFixed(2)} (${savingsPercentage.toFixed(1)}%) per month. Great job!`
                                    : isFinite(savingsPercentage) ?
                                        `Warning: You're overspending by CHF ${Math.abs(savings).toFixed(2)} (${Math.abs(savingsPercentage).toFixed(1)}%) per month.` :
                                        `Warning: You're overspending by CHF ${Math.abs(savings).toFixed(2)} per month.`
                                }

                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

