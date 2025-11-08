import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">All Products</h1>
        <p className="text-gray-600">
          Browse our complete catalog of electronics components and development boards
        </p>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          Showing {products.length} product{products.length !== 1 ? 's' : ''}
        </p>
        <select className="border border-gray-300 rounded px-4 py-2">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A to Z</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
