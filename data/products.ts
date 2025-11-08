import { Product } from '@/types'

export const products: Product[] = [
  {
    id: '1',
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
    id: '2',
    name: 'IoT RedBoard - ESP32',
    description: 'ESP32-based development board with MicroPython support. Ideal for IoT projects and wireless applications.',
    price: 29.95,
    image: '/images/iot-redboard-esp32.jpg',
    category: 'development-boards',
    subcategory: 'microcontrollers',
    inStock: true,
    stockStatus: 'in_stock',
    featured: true,
    specifications: {
      'MCU': 'ESP32',
      'WiFi': '802.11 b/g/n',
      'Bluetooth': 'BLE 4.2',
      'GPIO': '30 pins'
    },
    tags: ['ESP32', 'IoT', 'WiFi', 'Bluetooth', 'MicroPython']
  },
  {
    id: '3',
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
  },
  {
    id: '4',
    name: 'Raspberry Pi 4 Model B - 4GB',
    description: 'Latest Raspberry Pi with improved performance, dual-band WiFi, and USB 3.0 support.',
    price: 55.00,
    image: '/images/raspberry-pi-4.jpg',
    category: 'development-boards',
    subcategory: 'single-board-computers',
    inStock: true,
    stockStatus: 'in_stock',
    specifications: {
      'CPU': 'Quad-core Cortex-A72',
      'RAM': '4GB LPDDR4',
      'USB': '2x USB 3.0, 2x USB 2.0',
      'Ethernet': 'Gigabit Ethernet'
    },
    tags: ['Raspberry Pi', 'SBC', 'Linux']
  },
  {
    id: '5',
    name: 'Temperature & Humidity Sensor',
    description: 'High-accuracy digital temperature and humidity sensor with I2C interface.',
    price: 12.95,
    image: '/images/temp-humidity-sensor.jpg',
    category: 'sensors',
    subcategory: 'environmental',
    inStock: true,
    stockStatus: 'in_stock',
    specifications: {
      'Temperature Range': '-40°C to 125°C',
      'Humidity Range': '0-100% RH',
      'Accuracy': '±0.3°C, ±2% RH',
      'Interface': 'I2C'
    },
    tags: ['Temperature', 'Humidity', 'Environmental']
  },
  {
    id: '6',
    name: 'Arduino Uno R3',
    description: 'Classic Arduino development board based on ATmega328P microcontroller.',
    price: 24.95,
    image: '/images/arduino-uno.jpg',
    category: 'development-boards',
    subcategory: 'arduino',
    inStock: true,
    stockStatus: 'in_stock',
    specifications: {
      'MCU': 'ATmega328P',
      'Operating Voltage': '5V',
      'Digital I/O': '14 pins',
      'Analog Input': '6 pins'
    },
    tags: ['Arduino', 'Microcontroller', 'Beginner Friendly']
  },
  {
    id: '7',
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
    id: '8',
    name: 'LoRa Module - RFM95W',
    description: 'Long-range wireless communication module operating at 915MHz. Range up to 15km.',
    price: 19.95,
    image: '/images/lora-rfm95w.jpg',
    category: 'iot-wireless',
    subcategory: 'lora',
    inStock: true,
    stockStatus: 'in_stock',
    specifications: {
      'Frequency': '915 MHz',
      'Range': 'Up to 15 km',
      'Power': '20 dBm max',
      'Interface': 'SPI'
    },
    tags: ['LoRa', 'Wireless', 'Long Range', 'IoT']
  },
  {
    id: '9',
    name: 'Accelerometer & Gyro - MPU6050',
    description: '6-axis motion tracking sensor with accelerometer and gyroscope.',
    price: 9.95,
    image: '/images/mpu6050.jpg',
    category: 'sensors',
    subcategory: 'movement',
    inStock: true,
    stockStatus: 'in_stock',
    specifications: {
      'Accelerometer': '±2g to ±16g',
      'Gyroscope': '±250°/s to ±2000°/s',
      'Interface': 'I2C',
      'Resolution': '16-bit'
    },
    tags: ['Accelerometer', 'Gyroscope', 'IMU', 'Motion']
  },
  {
    id: '10',
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
