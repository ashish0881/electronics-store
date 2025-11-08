import Link from 'next/link'
import { getFeaturedProducts } from '@/data/products'
import { categories } from '@/data/categories'
import ProductCarousel from '@/components/ProductCarousel'
import { BookOpen, Wifi, Satellite, Cpu } from 'lucide-react'

export default function Home() {
  const featuredProducts = getFeaturedProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg p-12 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Electronics Component Store
        </h1>
        <p className="text-xl mb-8 text-primary-100">
          Everything you need for your next electronics project
        </p>
        <Link
          href="/products"
          className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
        >
          Shop Now
        </Link>
      </section>

      {/* Featured Products */}
      <ProductCarousel title="Featured Products" products={featuredProducts} />

      {/* Category Grid */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-primary-500"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Cpu className="text-primary-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              {category.description && (
                <p className="text-gray-600">{category.description}</p>
              )}
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub.id}
                      className="text-xs bg-gray-100 px-2 py-1 rounded"
                    >
                      {sub.name}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Learning Resources */}
      <section className="my-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Learning Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/learn/engineering-essentials"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <BookOpen className="text-primary-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Engineering Essentials</h3>
            <p className="text-gray-600 text-sm">
              Learn the fundamentals of electronics and engineering
            </p>
          </Link>
          <Link
            href="/learn/gps-systems"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Satellite className="text-primary-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Building GPS Systems</h3>
            <p className="text-gray-600 text-sm">
              Understand how GPS and GNSS systems work
            </p>
          </Link>
          <Link
            href="/learn/wifi"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <Wifi className="text-primary-600 mb-4" size={32} />
            <h3 className="font-semibold text-lg mb-2">Working with WiFi</h3>
            <p className="text-gray-600 text-sm">
              Connect your projects to the internet
            </p>
          </Link>
        </div>
      </section>

      {/* Custom Kit Service */}
      <section className="my-12 bg-primary-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Build a Custom Kit</h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Our custom kit service is perfect for workshops, classrooms, or special projects.
          Specify the components you need, and we'll create a tailored kit for you.
        </p>
        <Link
          href="/custom-kit"
          className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-block"
        >
          Learn More
        </Link>
      </section>
    </div>
  )
}
