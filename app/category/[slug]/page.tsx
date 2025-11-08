import { notFound } from 'next/navigation'
import { getCategoryBySlug, categories } from '@/data/categories'
import { getProductsByCategory, products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }))
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug)
  
  if (!category) {
    notFound()
  }

  const categoryProducts = getProductsByCategory(category.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{category.name}</h1>
        {category.description && (
          <p className="text-gray-600">{category.description}</p>
        )}
      </div>

      {/* Subcategories */}
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Subcategories</h2>
          <div className="flex flex-wrap gap-2">
            {category.subcategories.map((subcategory) => (
              <a
                key={subcategory.id}
                href={`#${subcategory.slug}`}
                className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                {subcategory.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-gray-600">
          Showing {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}
        </p>
        <select className="border border-gray-300 rounded px-4 py-2">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Name: A to Z</option>
        </select>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  )
}
