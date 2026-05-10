import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'
import { ShoppingCart, Heart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const displayPrice = product.salePrice || product.price
  const hasSale = product.salePrice && product.salePrice < product.price

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-48 bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-primary-600 text-white text-xs px-2 py-1 rounded">
              Featured
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary-600 transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-2 mb-2">
          {hasSale ? (
            <>
              <span className="text-2xl font-bold text-primary-600">
                ${product.salePrice?.toFixed(2)}
              </span>
              <span className="text-gray-500 line-through">
                ${product.price.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="text-2xl font-bold text-primary-600">
              ${displayPrice.toFixed(2)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-3">
          <span className={`text-sm ${
            product.stockStatus === 'in_stock' ? 'text-green-600' :
            product.stockStatus === 'backorder' ? 'text-yellow-600' :
            'text-red-600'
          }`}>
            {product.stockStatus === 'in_stock' ? 'In stock' :
             product.stockStatus === 'backorder' ? 'Backorder' :
             'Out of stock'}
          </span>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 bg-primary-600 text-white py-2 px-4 rounded hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
            <ShoppingCart size={18} />
            Add to Cart
          </button>
          <button className="p-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
