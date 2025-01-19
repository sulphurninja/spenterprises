import Header from '@/components/header'
import Hero from '@/components/hero'
import BookingForm from '@/components/booking-form'
import FeaturedDestinations from '@/components/featured-destinations'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import { BackgroundLines } from '@/components/ui/background-lines'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
           SP Enterprises <br /> Tours & Travels.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Your one-stop solution for railway, flight, and bus ticket bookings. Experience seamless travel planning with us.
          </p>
        </BackgroundLines>
        <BookingForm />
        <FeaturedDestinations />
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

