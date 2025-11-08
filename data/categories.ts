import { Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'gps-gnss',
    name: 'GPS / GNSS',
    slug: 'gps-gnss',
    description: 'GPS and GNSS modules, boards, and accessories',
    subcategories: [
      { id: 'rtk-surveyors', name: 'RTK Surveyors', slug: 'rtk-surveyors', parentCategory: 'gps-gnss' },
      { id: 'modules', name: 'Modules', slug: 'modules', parentCategory: 'gps-gnss' },
      { id: 'antennas', name: 'Antennas', slug: 'antennas', parentCategory: 'gps-gnss' },
      { id: 'accessories', name: 'Accessories', slug: 'accessories', parentCategory: 'gps-gnss' },
    ]
  },
  {
    id: 'sensors',
    name: 'Sensors',
    slug: 'sensors',
    description: 'Various sensor modules for your projects',
    subcategories: [
      { id: 'environmental', name: 'Environmental', slug: 'environmental', parentCategory: 'sensors' },
      { id: 'movement', name: 'Movement', slug: 'movement', parentCategory: 'sensors' },
      { id: 'distance', name: 'Distance', slug: 'distance', parentCategory: 'sensors' },
      { id: 'biometric', name: 'Biometric', slug: 'biometric', parentCategory: 'sensors' },
    ]
  },
  {
    id: 'development-boards',
    name: 'Development Boards',
    slug: 'development-boards',
    description: 'Microcontrollers and single-board computers',
    subcategories: [
      { id: 'arduino', name: 'Arduino', slug: 'arduino', parentCategory: 'development-boards' },
      { id: 'microcontrollers', name: 'Microcontrollers', slug: 'microcontrollers', parentCategory: 'development-boards' },
      { id: 'single-board-computers', name: 'Single-Board Computers', slug: 'single-board-computers', parentCategory: 'development-boards' },
      { id: 'raspberry-pi', name: 'Raspberry Pi', slug: 'raspberry-pi', parentCategory: 'development-boards' },
    ]
  },
  {
    id: 'iot-wireless',
    name: 'IoT & Wireless',
    slug: 'iot-wireless',
    description: 'Wireless communication modules and IoT devices',
    subcategories: [
      { id: 'wifi', name: 'WiFi', slug: 'wifi', parentCategory: 'iot-wireless' },
      { id: 'bluetooth', name: 'Bluetooth', slug: 'bluetooth', parentCategory: 'iot-wireless' },
      { id: 'lora', name: 'LoRa', slug: 'lora', parentCategory: 'iot-wireless' },
      { id: 'cellular', name: 'Cellular', slug: 'cellular', parentCategory: 'iot-wireless' },
    ]
  },
  {
    id: 'components',
    name: 'Components',
    slug: 'components',
    description: 'Electronic components and parts',
    subcategories: [
      { id: 'leds', name: 'LEDs', slug: 'leds', parentCategory: 'components' },
      { id: 'resistors', name: 'Resistors', slug: 'resistors', parentCategory: 'components' },
      { id: 'capacitors', name: 'Capacitors', slug: 'capacitors', parentCategory: 'components' },
      { id: 'connectors', name: 'Connectors', slug: 'connectors', parentCategory: 'components' },
    ]
  },
  {
    id: 'kits',
    name: 'Kits',
    slug: 'kits',
    description: 'Starter kits and educational bundles',
    subcategories: [
      { id: 'starter-kits', name: 'Starter Kits', slug: 'starter-kits', parentCategory: 'kits' },
      { id: 'education-kits', name: 'Education Kits', slug: 'education-kits', parentCategory: 'kits' },
    ]
  }
]

export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug)
}
