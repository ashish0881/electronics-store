import { Product } from '@/types'

export const gpsGnss: Product[] = [
  {
    id: '6',
    name: 'GPS RTK Facet',
    description: 'High-precision RTK GPS module with centimeter-level accuracy. Perfect for surveying and precision applications.',
    price: 739.95,
    image: '/images/gps-rtk-facet.jpg',
    category: 'gps-gnss',
    subcategory: 'rtk-surveyors',
    inStock: true,
    stockStatus: 'in_stock',
    featured: true,
    specifications: {
      'Accuracy': 'Centimeter-level with RTK',
      'Channels': 'Multi-constellation',
      'Update Rate': '10 Hz',
      'Interface': 'USB-C, Qwiic'
    },
    tags: ['GPS', 'RTK', 'High Precision', 'Surveying']
  },
  {
    id: '7',
    name: 'GPS Breakout - NEO-M9N',
    description: 'Multi-constellation GNSS module with high sensitivity and low power consumption.',
    price: 76.50,
    image: '/images/gps-neo-m9n.jpg',
    category: 'gps-gnss',
    subcategory: 'modules',
    inStock: true,
    stockStatus: 'in_stock',
    featured: true,
    specifications: {
      'Constellations': 'GPS, GLONASS, Galileo, BeiDou',
      'Sensitivity': '-167 dBm',
      'Update Rate': '10 Hz',
      'Interface': 'I2C, UART, SPI'
    },
    tags: ['GPS', 'GNSS', 'Multi-constellation']
  }
]