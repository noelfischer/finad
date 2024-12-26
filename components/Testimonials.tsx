import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

const testimonials = [
  {
    quote: "FinAd has completely transformed how I manage my finances. It's intuitive, powerful, and has helped me save more than ever before.",
    author: "Sarah Johnson",
    title: "Small Business Owner",
    avatar: "/p0.jpg?height=80&width=80",
  },
  {
    quote: "As a freelancer, keeping track of my income and expenses was always a challenge. FinAd made it effortless and helped me optimize my spending.",
    author: "Michael Chen",
    title: "Freelance Designer",
    avatar: "/p1.jpg?height=80&width=80",
  },
  {
    quote: "The insights provided by FinAd have been eye-opening. I've been able to identify and cut unnecessary expenses, putting me on track for early retirement.",
    author: "Emily Rodriguez",
    title: "Software Engineer",
    avatar: "/p2.jpg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
              </CardContent>
              <CardFooter className="flex items-center space-x-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

