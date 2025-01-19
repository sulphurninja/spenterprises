import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How can I book a train ticket?',
    answer: 'You can book a train ticket by navigating to our booking form, selecting the "Train" tab, and entering your journey details. Then, choose from the available options and complete the payment process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit/debit cards, net banking, UPI, and popular digital wallets.',
  },
  {
    question: 'Can I cancel my booking?',
    answer: 'Yes, you can cancel your booking subject to the cancellation policy of the service provider. Please check the specific terms and conditions for each booking.',
  },
  {
    question: 'Do you offer international flight bookings?',
    answer: 'Yes, we offer both domestic and international flight bookings. You can find a wide range of options in our flight booking section.',
  },
  {
    question: 'Is it possible to book a round trip for bus travel?',
    answer: 'Yes, you can book round trips for bus travel. Simply select the "Round Trip" option when making your bus booking.',
  },
]

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background dark:bg-background/95">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted">
              <AccordionTrigger className="text-primary hover:text-primary/80">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

