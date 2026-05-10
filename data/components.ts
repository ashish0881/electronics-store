import { Product } from '@/types'

export const components: Product[] = [
  {
    id: '8',
    name: 'WS2812B RGB LED Strip',
    description: 'Addressable RGB LED strip with 60 LEDs per meter. Perfect for lighting projects.',
    price: 18.95,
    image: '/images/ws2812b-led-strip.jpg',
    category: 'components',
    subcategory: 'leds',
    inStock: true,
    stockStatus: 'in_stock',
    specifications: {
      'LEDs per meter': '60',
      'Voltage': '5V',
      'Current': '60mA per LED',
      'Interface': 'Single-wire data'
    },
    tags: ['LED', 'RGB', 'Addressable', 'Lighting']
  },
  {
    id: '9',
    name: 'Resistor Kit - 1/4W (500 total)',
    description: 'Comprehensive resistor kit with 500 resistors covering common values from 10Ω to 1MΩ.',
    price: 10.50,
    image: '/images/resistor-kit.jpg',
    category: 'components',
    subcategory: 'resistors',
    inStock: true,
    stockStatus: 'in_stock',
    specifications: {
      'Total Resistors': '500',
      'Power Rating': '1/4W',
      'Tolerance': '5%',
      'Values': '10Ω to 1MΩ'
    },
    tags: ['Resistor', 'Kit', 'Components']
  }
]