'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { searchProducts } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { Search } from 'lucide-react'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchQuery, setSearchQuery] = useState(query)
  const [results, setResults] = useState(searchProducts(query))

  useEffect(() => {
    if (query) {
      setSearchQuery(query)
      setResults(searchProducts(query))
    }
  }, [query])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setResults(searchProducts(searchQuery))
    // Update URL without page reload
    window.history.pushState({}, '', `/search?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Search Products</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-8">
        <div className="relative max-w-2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
          <input
            type="text"
            placeholder="Search entire store..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded hover:bg-primary-700 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* Results */}
      {searchQuery ? (
        <>
          <p className="text-gray-600 mb-4">
            Found {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{searchQuery}&quot;
          </p>
          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-4">No products found matching your search.</p>
              <p className="text-gray-400">Try different keywords or browse our categories.</p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Enter a search term to find products.</p>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}
