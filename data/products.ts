import { Product } from '@/types'
import { developmentBoards } from './development-boards'
import { sensors } from './sensors'
import { gpsGnss } from './gps-gnss'
import { components } from './components'
import { iotWireless } from './iot-wireless'

export const products: Product[] = [
  ...developmentBoards,
  ...sensors,
  ...gpsGnss,
  ...components,
  ...iotWireless
]

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}

export const getProductById = (id: string) => {
  return products.find(product => product.id === id)
}

export const searchProducts = (query: string) => {
  const lowerQuery = query.toLowerCase()
  return products.filter(product =>
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.tags?.some(tag => tag.toLowerCase().includes(lowerQuery))
  )
}
