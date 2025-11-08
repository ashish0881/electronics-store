'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Product } from '@/types'
import ProductCard from './ProductCard'

interface ProductCarouselProps {
  title: string
  products: Product[]
}

export default function ProductCarousel({ title, products }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4

  const totalPages = Math.ceil(products.length / itemsPerPage)
  const currentProducts = products.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  )

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="my-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="p-2 border border-gray-300 rounded hover:bg-gray-100"
            disabled={totalPages <= 1}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-2 border border-gray-300 rounded hover:bg-gray-100"
            disabled={totalPages <= 1}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
