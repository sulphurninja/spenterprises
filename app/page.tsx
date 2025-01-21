'use client'

import Header from '@/components/header'
import FeaturedDestinations from '@/components/featured-destinations'
import Services from '@/components/services'
import Testimonials from '@/components/testimonials'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import { BackgroundLines } from '@/components/ui/background-lines'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import 'react-whatsapp-widget/dist/index.css'
import { LayoutGridDemo } from '@/components/grid'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <FloatingWhatsApp phoneNumber="+917447477741" avatar='/logo.jpg' className='' accountName="SP Enterprises" darkMode />
      <div className='flex justify-start '>
        <img src='/train.gif' className='absolute top-0 w- mt-20 md:w-full md:h-[80%] scale-' />
      </div>
      <main className='mt-52'>
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
          <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
            SP Enterprises <br /> Tours & Travels.
          </h2>
          <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            Your one-stop solution for railway, flight, and bus ticket bookings. Experience seamless travel planning with us.
          </p>
        </BackgroundLines>
        <div className='flex justify-center rounded-xl'>
          <img src='/banner.jpg' className='rounded-xl h-full mx-12 md:scale-100 scale-90 w-full' />
        </div>
        <LayoutGridDemo />
        <div className='mt-12 md:mt-28'>
          <FeaturedDestinations />
        </div>
        <Services />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
