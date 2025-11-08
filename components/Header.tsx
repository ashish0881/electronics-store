'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react'
import { categories } from '@/data/categories'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-4">
            <Link href="/professional" className="hover:underline">Professional</Link>
            <Link href="/edu" className="hover:underline">EDU</Link>
            <Link href="/distributor" className="hover:underline">Distributor</Link>
          </div>
          <div className="flex gap-4">
            <Link href="/support" className="hover:underline">Support</Link>
            <Link href="/contact" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Electronics Store
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <form action="/search" method="get" className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="q"
                placeholder="Search entire store..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded"
            >
              <Search size={24} />
            </button>
            <Link href="/account" className="p-2 hover:bg-gray-100 rounded">
              <User size={24} />
            </Link>
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded relative">
              <ShoppingCart size={24} />
              <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="mt-4 md:hidden">
            <form action="/search" method="get" className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="q"
                placeholder="Search entire store..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        )}

        {/* Navigation */}
        <nav className={`mt-4 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
            <li>
              <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium">
                Featured
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`/category/${category.slug}`}
                  className="text-gray-700 hover:text-primary-600 font-medium"
                >
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/kits" className="text-gray-700 hover:text-primary-600 font-medium">
                Kits
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
