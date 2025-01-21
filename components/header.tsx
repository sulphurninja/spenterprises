import Link from 'next/link'
import { Bus, Plane, Train } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'

export default function Header() {
  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = '7447477741'; // WhatsApp Number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="/logo.png" className="h-12 dark:invert-[100]" />
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
              <li>
                <button
                  onClick={() => handleWhatsAppRedirect('I want to book Railway Tickets.')}
                  className="flex items-center bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground p-2 rounded"
                >
                  <Train className='h-5' />  Railway Tickets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleWhatsAppRedirect('I want to book Flight Tickets.')}
                  className="bg-transparent flex items-center text-foreground hover:bg-accent hover:text-accent-foreground p-2 rounded"
                >
                  <Plane className='h-5' /> Flight Tickets
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleWhatsAppRedirect('I want to book Bus Tickets.')}
                  className="bg-transparent flex justify-center text-foreground hover:bg-accent hover:text-accent-foreground p-2 rounded"
                >
                  <Bus className='h-5' />  Bus Tickets
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
