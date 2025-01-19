import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Amit Sharma',
    avatar: 'AS',
    title: 'Frequent Traveler',
    testimonial: 'SP Enterprises has made my travel bookings so much easier. Their railway ticket booking service is top-notch!',
  },
  {
    name: 'Priya Patel',
    avatar: 'PP',
    title: 'Business Traveler',
    testimonial: 'I rely on SP Enterprises for all my business travel needs. Their flight booking service is efficient and cost-effective.',
  },
  {
    name: 'Rahul Verma',
    avatar: 'RV',
    title: 'Adventure Enthusiast',
    testimonial: 'The bus booking feature of SP Enterprises has been a game-changer for my weekend getaways. Highly recommended!',
  },
]

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <Card key={item.name} className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-transform duration-300 ease-in-out hover:scale-105">
              <CardHeader>
                <Avatar>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${item.avatar}&backgroundColor=4f46e5`} />
                  <AvatarFallback>{item.avatar}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-2 text-muted-foreground">{item.testimonial}</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold text-primary">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.title}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

