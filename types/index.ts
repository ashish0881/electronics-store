export interface Product {
  id: string
  name: string
  description: string
  price: number
  salePrice?: number
  image: string
  category: string
  subcategory?: string
  inStock: boolean
  stockStatus: 'in_stock' | 'backorder' | 'out_of_stock'
  specifications?: {
    [key: string]: string
  }
  tags?: string[]
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  subcategories?: Subcategory[]
  icon?: string
}

export interface Subcategory {
  id: string
  name: string
  slug: string
  parentCategory: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
}
