'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { PieChart, Wallet, TrendingUp, Upload } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

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
    const [isDataVisible, setIsDataVisible] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [typedSuggestion, setTypedSuggestion] = useState('Thinking...')

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

    useEffect(() => {
        if (isDataVisible) {
            setTypedSuggestion('Thinking...')
            const timer = setTimeout(() => {
                const suggestion = savings >= 0
                    ? `You're saving CHF ${savings.toFixed(2)} (${savingsPercentage.toFixed(1)}%) per month. Great job!`
                    : isFinite(savingsPercentage)
                        ? `Warning: You're overspending by CHF ${Math.abs(savings).toFixed(2)} (${Math.abs(savingsPercentage).toFixed(1)}%) per month.`
                        : `Warning: You're overspending by CHF ${Math.abs(savings).toFixed(2)} per month.`

                typeText(suggestion, setTypedSuggestion)
            }, 3000) // 2 second delay before starting to type

            return () => clearTimeout(timer)
        }
    }, [isDataVisible, savings])

    const typeText = (text: string, setter: (text: string) => void) => {
        let i = 0
        let intervalId: NodeJS.Timeout

        const type = () => {
            if (i < text.length) {
                setter(text.slice(0, i + 1))
                i++
                intervalId = setTimeout(type, 30)
            }
        }

        type()

        return () => clearTimeout(intervalId)
    }

    const handleIncomeChange = (newIncome: number[]) => {
        setIncome(newIncome[0])
        setTypedSuggestion('')
    }

    const totalExpenses = categories.reduce((sum, category) => sum + category.amount, 0)
    const savingsPercentage = ((income - totalExpenses) / income) * 100

    const handleUpload = () => {
        setIsLoading(true)
        // Simulate loading time
        setTimeout(() => {
            setIsLoading(false)
            setIsDataVisible(true)
        }, 3000) // 3 seconds loading time
    }

    return (
        <div className="bg-white/50 p-6 shadow-xl rounded-xl max-w-3xl mx-auto text-sm sm:text-base">
            <div className="space-y-4">
                {!isDataVisible &&
                    <motion.div
                        className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Try Our Interactive Demo</h2>
                        <Button
                            onClick={handleUpload}
                            className="w-full"
                            disabled={isLoading || isDataVisible}
                        >
                            <Upload className="mr-2 h-4 w-4" /> Upload Financial Data
                        </Button>
                        <p className="text-sm text-gray-500 text-center">Click to simulate data analysis. No actual upload required.</p>
                    </motion.div>
                }

                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center justify-center space-y-4"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 2, 2, 1, 1],
                                    rotate: [0, 0, 270, 270, 0],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                }}
                                transition={{
                                    duration: 2,
                                    ease: "easeInOut",
                                    times: [0, 0.2, 0.5, 0.8, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                className="w-16 h-16 bg-blue-500"
                            />
                            <p className="text-lg font-semibold">Analyzing your financial data...</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isDataVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
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
                                        {categories.map((category, index) => (
                                            <motion.div
                                                key={category.name}
                                                initial={{ width: 0 }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 1.2, delay: index * 0.3 }}
                                            >
                                                <div className="relative h-10">
                                                    <Progress value={category.percentage} className={`h-10 ${category.color}`} />
                                                    <div className="absolute inset-0 flex justify-between items-center px-3 text-white">
                                                        <span>{category.name}</span>
                                                        <span className='font-bold'>CHF {category.amount.toFixed(2)} {isFinite(category.percentage) && <>({category.percentage.toFixed(1)}%)</>}</span>
                                                    </div>
                                                </div>
                                            </motion.div>
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
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 0.8, delay: categories.length * 0.1 }}
                                        >
                                            <div className="relative h-10">
                                                <Progress value={Math.max(0, savingsPercentage)} className="h-10 bg-indigo-500/70" />
                                                <div className="absolute inset-0 flex justify-between items-center px-3 text-white">
                                                    <span className="font-bold">Savings</span>
                                                    <span className="font-bold">
                                                        CHF {savings.toFixed(2)} {isFinite(savingsPercentage) && <>({savingsPercentage.toFixed(1)}%)</>}
                                                    </span>
                                                </div>
                                            </div>
                                        </motion.div>
                                        <p className="text-sm text-gray-500">
                                            {typedSuggestion}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

