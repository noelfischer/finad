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
                    <div
                        className="space-y-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Try Our Interactive Demo</h2>
                        <Button
                            onClick={handleUpload}
                            className="w-full mt-8 mb-2"
                            disabled={isLoading || isDataVisible}
                        >
                            <Upload className="mr-2 h-4 w-4" /> Upload Financial Data
                        </Button>
                        <p className="text-sm text-gray-500 text-center">Click to simulate data analysis. No actual upload required.</p>
                    </div>
                }

                <AnimatePresence>
                    {isLoading && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            transition={{ duration: 0.35 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="flex-grow flex flex-col items-center justify-center space-y-4"
                        >
                            <div className="loader w-[60px] aspect-square flex animate-[l10-0_2s_infinite_steps(1)]">
                                <style jsx>{`
                .loader {
                    display: inline-grid;
                    width: 70px;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    overflow: hidden;
                    outline: 7px solid #3b82f6;
                    outline-offset: -1px;
                    animation: l3-0 4s linear infinite;
                }
                .loader:before,
                .loader:after {
                    content:"";
                    grid-area: 1/1;
                }
                .loader:before {
                    clip-path: polygon(evenodd,0 0,100% 0,100% 100%,0 100%,0 0,100% 50%,83.81% 59.06%,93.3% 75%,74.75% 74.75%,75% 93.3%,59.06% 83.81%,50% 100%,40.94% 83.81%,25% 93.3%,25.25% 74.75%,6.7% 75%,16.19% 59.06%,0% 50%,16.19% 40.94%,6.7% 25%,25.25% 25.25%,25% 6.7%,40.94% 16.19%,50% 0%,59.06% 16.19%,75% 6.7%,74.75% 25.25%,93.3% 25%,83.81% 40.94%,100% 50%);
                    background: #3b82f6;
                }
                .loader:after {
                    margin: 12.5%;
                    clip-path: polygon(100% 50%,78.19% 60.26%,88.3% 82.14%,65% 75.98%,58.68% 99.24%,44.79% 79.54%,25% 93.3%,27.02% 69.28%,3.02% 67.1%,20% 50%,3.02% 32.9%,27.02% 30.72%,25% 6.7%,44.79% 20.46%,58.68% 0.76%,65% 24.02%,88.3% 17.86%,78.19% 39.74%);
                    background:#6eb2ff;
                    transform: rotate(0turn) translate(15.625%) rotate(0turn);
                    animation: l3-1 2s linear infinite;
                }
                @keyframes l3-0 {to{rotate: -1turn}}
                @keyframes l3-1 {to{transform: rotate(1turn) translate(15.625%) rotate(-1.333turn)}}
            `}</style>
                            </div>
                            <p className="text-lg font-semibold">Analyzing your financial data...</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <AnimatePresence>
                    {isDataVisible && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, height: 200 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1.2 }}
                            className="space-y-4 overflow-hidden"
                        >
                            <motion.div

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
                            </motion.div>
                            <motion.div
                            >
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
                                                    transition={{ duration: 1, delay: index * 0.1 }}
                                                >
                                                    <div className="relative h-10">
                                                        <Progress value={category.percentage} className={`h-10 ${category.color}`} />
                                                        <motion.div
                                                            initial={{ fontSize: '0.05rem' }}
                                                            animate={{ fontSize: '1rem' }}
                                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                                            className="absolute inset-0 flex justify-between items-center px-3 text-white">
                                                            <span>{category.name}</span>
                                                            <span className='font-bold'>CHF {category.amount.toFixed(2)} {isFinite(category.percentage) && <>({category.percentage.toFixed(1)}%)</>}</span>
                                                        </motion.div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                            <motion.div
                            >
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
                                                transition={{ duration: 1, delay: 0.6 }}
                                            >
                                                <div className="relative h-10">
                                                    <Progress value={Math.max(0, savingsPercentage)} className="h-10 bg-indigo-500/70" />
                                                    <motion.div
                                                        initial={{ fontSize: '0.05rem' }}
                                                        animate={{ fontSize: '1rem' }}
                                                        transition={{ duration: 0.6, delay: 0.6 }}
                                                        className="absolute inset-0 flex justify-between items-center px-3 text-white">
                                                        <span className="font-bold">Savings</span>
                                                        <span className="font-bold">
                                                            CHF {savings.toFixed(2)} {isFinite(savingsPercentage) && <>({savingsPercentage.toFixed(1)}%)</>}
                                                        </span>
                                                    </motion.div>
                                                </div>
                                            </motion.div>
                                            <p className="text-sm text-gray-500">
                                                {typedSuggestion}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div >
    )
}

