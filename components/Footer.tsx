import Link from 'next/link'
import { categories } from '@/data/categories'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/story" className="hover:text-white">Read Our Story</Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-white">Press & Media</Link>
              </li>
              <li>
                <Link href="/education" className="hover:text-white">Education</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">Job Openings</Link>
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">PARTNER WITH US</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/partners" className="hover:text-white">See Our Partners</Link>
              </li>
              <li>
                <Link href="/distributor" className="hover:text-white">Become a Distributor</Link>
              </li>
              <li>
                <Link href="/volume" className="hover:text-white">Volume Discounts</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/support" className="hover:text-white">Customer Support</Link>
              </li>
              <li>
                <Link href="/forum" className="hover:text-white">Tech Support Forum</Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">Returns & Exchanges</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white">FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Site Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">SITE INFORMATION</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-white">Terms Of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-white">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0">
              Electronics Store ® / 123 Tech Street, Innovation City, IC 12345
            </p>
            <div className="flex gap-4">
              <Link href="/youtube" className="hover:text-white">YouTube</Link>
              <Link href="/twitter" className="hover:text-white">Twitter</Link>
              <Link href="/facebook" className="hover:text-white">Facebook</Link>
              <Link href="/instagram" className="hover:text-white">Instagram</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
