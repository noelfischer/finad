import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const founders = [
  {
    name: "Noel Fischer",
    role: "CEO & Co-Founder",
    image: "/noel.jpg?height=300&width=300",
    description: "Serial entrepreneur with a passion for personal finance and technology."
  },
  {
    name: "Aschvin Umachandran",
    role: "CTO & Co-Founder",
    image: "/aschvin.jpg?height=300&width=300",
    description: "AI and machine learning expert with a background in developing financial algorithms."
  },
  {
    name: "Kaja Mathitharan",
    role: "COO & Co-Founder",
    image: "/kaja.png?height=300&width=300",
    description: "Experienced operations leader with a track record in scaling startups."
  }
]

export default function Founders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12  max-w-4xl mx-auto">
      {founders.map((founder) => (
        <Card key={founder.name} className="transition-transform hover:scale-105">
          <CardHeader>
            <Image
              src={founder.image}
              alt={founder.name}
              width={300}
              height={300}
              className="rounded-full mx-auto"
            />
          </CardHeader>
          <CardContent className="text-center">
            <CardTitle className="mb-2">{founder.name}</CardTitle>
            <p className="text-sm text-gray-500 mb-2">{founder.role}</p>
            <p className="text-sm">{founder.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

