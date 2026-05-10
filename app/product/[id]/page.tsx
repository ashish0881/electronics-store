import { notFound } from 'next/navigation'
import { getProductById } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { ShoppingCart, Heart, Share2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const displayPrice = product.salePrice || product.price
  const hasSale = product.salePrice && product.salePrice < product.price

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${product.category}`} className="hover:text-primary-600 capitalize">
          {product.category.replace('-', ' ')}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-4">
            {hasSale ? (
              <>
                <span className="text-4xl font-bold text-primary-600">
                  ${product.salePrice?.toFixed(2)}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm font-semibold">
                  Sale
                </span>
              </>
            ) : (
              <span className="text-4xl font-bold text-primary-600">
                ${displayPrice.toFixed(2)}
              </span>
            )}
          </div>

          <div className="mb-6">
            <span className={`inline-block px-3 py-1 rounded text-sm font-semibold ${
              product.stockStatus === 'in_stock' ? 'bg-green-100 text-green-600' :
              product.stockStatus === 'backorder' ? 'bg-yellow-100 text-yellow-600' :
              'bg-red-100 text-red-600'
            }`}>
              {product.stockStatus === 'in_stock' ? 'In Stock' :
               product.stockStatus === 'backorder' ? 'Backorder' :
               'Out of Stock'}
            </span>
          </div>

          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          <div className="flex gap-4 mb-6">
            <button className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 font-semibold">
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <Heart size={20} />
            </button>
            <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
              <Share2 size={20} />
            </button>
          </div>

          {product.tags && product.tags.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 px-3 py-1 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Specifications */}
      {product.specifications && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Specifications</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-semibold text-gray-700 mb-1">{key}</dt>
                  <dd className="text-gray-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )}

      {/* Related Products Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* This would show related products - for now showing placeholder */}
          <div className="text-center py-8 text-gray-500">
            Related products would appear here
          </div>
        </div>
      </div>
    </div>
  )
}
