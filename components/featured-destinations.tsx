import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const destinations = [
  {
    name: 'Mumbai',
    description: 'The city of dreams',
    image: '/download.jpeg',
  },
  {
    name: 'Delhi',
    description: 'The heart of India',
    image: '/delhi.jpeg',
  },
  {
    name: 'Kolkata',
    description: 'The city of joy',
    image: '/kolkata.webp',
  },
  {
    name: 'Chennai',
    description: 'The Detroit of India',
    image: '/chennai.jpg',
  },
]

export default function FeaturedDestinations() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.name} className="group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
              <CardHeader className="p-0">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={300}
                  height={200}
                  className="h-48 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg font-semibold text-primary">{destination.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{destination.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4">
                <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground">Explore</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

