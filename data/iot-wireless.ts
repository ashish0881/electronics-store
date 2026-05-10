import { Product } from '@/types'

export const iotWireless: Product[] = [
  {
    id: '10',
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
  }
]