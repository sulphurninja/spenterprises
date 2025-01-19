import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Train, Plane, Bus, Hotel, CreditCard, HeadphonesIcon } from 'lucide-react'

const services = [
  {
    title: 'Railway Booking',
    description: 'Book train tickets for any destination across India',
    icon: Train,
  },
  {
    title: 'Flight Booking',
    description: 'Book domestic and international flights at best prices',
    icon: Plane,
  },
  {
    title: 'Bus Booking',
    description: 'Book bus tickets for intercity and intracity travel',
    icon: Bus,
  },
  {
    title: 'Hotel Booking',
    description: 'Find and book hotels at your destination',
    icon: Hotel,
  },
  {
    title: 'Travel Insurance',
    description: 'Get insured for a worry-free journey',
    icon: CreditCard,
  },
  {
    title: '24/7 Support',
    description: 'Round the clock customer support for all your queries',
    icon: HeadphonesIcon,
  },
]

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary dark:bg-secondary/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ease-in-out hover:scale-105">
              <CardHeader>
                <service.icon className="h-10 w-10 mb-2 text-primary" />
                <CardTitle className="text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

