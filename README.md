# Electronics Store - E-commerce Website

A modern, full-featured e-commerce website similar to SparkFun Electronics, built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Product Catalog** - Browse products by category with filtering and sorting
- 🔍 **Search Functionality** - Search products across the entire store
- 🛒 **Shopping Cart** - Add products to cart and manage quantities
- ❤️ **Wishlist** - Save favorite products for later
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean, professional design with smooth animations
- ⚡ **Fast Performance** - Built with Next.js for optimal performance

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Smooth animations

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── category/          # Category pages
│   ├── product/           # Product detail pages
│   ├── products/          # All products page
│   └── cart/              # Shopping cart page
├── components/            # React components
│   ├── Header.tsx         # Site header with navigation
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product card component
│   └── ProductCarousel.tsx # Product carousel
├── data/                  # Data files
│   ├── products.ts        # Product data
│   └── categories.ts      # Category data
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Features to Implement

- [ ] User authentication and accounts
- [ ] Payment processing integration
- [ ] Order management system
- [ ] Product reviews and ratings
- [ ] Advanced filtering and search
- [ ] Product comparison feature
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Shipping calculator
- [ ] Product recommendations

## Customization

### Adding Products

Edit `data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  image: '/images/product.jpg',
  category: 'category-slug',
  inStock: true,
  stockStatus: 'in_stock',
  // ... other fields
}
```

### Adding Categories

Edit `data/categories.ts` to add new categories.

### Styling

Modify `tailwind.config.js` to customize colors, fonts, and other design tokens.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted with Node.js

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
