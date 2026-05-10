import { Product } from '@/types'

export const sensors: Product[] = [
  {
    id: '4',
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
    id: '5',
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
  }
]