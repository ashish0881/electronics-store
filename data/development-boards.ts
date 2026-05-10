import { Product } from '@/types'

export const developmentBoards: Product[] = [
  {
    id: '1',
    name: 'Beaglebone',
    description: 'This model includes 4GB of eMMC built-in storage instead of the Rev B’s 2GB. With the doubled storage and faster eMMC, the developers were able to make the Rev C’s most significant change: shipping the BeagleBone Black with Debian Linux pre-loaded on the board’s flash instead of Angstrom Linux.',
    price: 29.95,
    image: '/images/Beagle bone.jpg',
    category: 'development-boards',
    subcategory: 'microcontrollers',
    inStock: true,
    stockStatus: 'in_stock',
    featured: true,
    specifications: {
      'Item Type:': 'Rev C',
      'RAM Capacity:': '512MB',
      'Processor Type:': 'AM3358 Series',
      'Processor': 'Sitara AM3358BZCZ100 1GHz, 2000 MIPS',
      'Graphics Engine': 'SGX530 3D, 20M Polygons/S',
    },
    tags: ['ESP32', 'IoT', 'WiFi', 'Bluetooth', 'MicroPython']
  },
  {
    id: '2',
    name: 'Raspberry Pi 4 Model B - 4GB',
    description: 'Latest Raspberry Pi with improved performance, dual-band WiFi, and USB 3.0 support.',
    price: 55.00,
    image: '/images/raspberry pi.png',
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
    id: '3',
    name: 'Arduino Uno R3',
    description: 'Classic Arduino development board based on ATmega328P microcontroller.',
    price: 24.95,
    image: '/images/arduino-uno-r3.webp',
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
  }
]