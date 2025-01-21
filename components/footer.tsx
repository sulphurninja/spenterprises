import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-background text-foreground">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">SP Enterprises, Tours & Travels is your trusted partner for all your travel needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/about" className="text-sm hover:underline">About</Link></li>
              <li><Link href="/services" className="text-sm hover:underline">Services</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Near Godrej Marketing Office Maan, Hinjewadi, Pune, 411057</p>
            <p className="text-sm">Phone: +91 7447477741</p>
            <p className="text-sm">Email: info@spticketbooking.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4">
          <p className="text-center text-sm">&copy; 2023 SP Enterprises, Tours & Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

