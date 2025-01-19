import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary via-purple-500 to-pink-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white dark:text-gray-50">
              Welcome to SP Enterprises, Tours & Travels
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl dark:text-gray-300">
              Your one-stop solution for railway, flight, and bus ticket bookings. Experience seamless travel planning with us.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">Book Now</Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

