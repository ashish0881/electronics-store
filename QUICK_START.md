# Quick Start Guide

## Getting Your Electronics Store Running

### Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React icons
- Framer Motion

### Step 2: Start Development Server

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### Step 3: Explore the Website

- **Homepage**: `/` - Featured products, categories, and learning resources
- **All Products**: `/products` - Browse all products
- **Categories**: `/category/[slug]` - View products by category
- **Product Details**: `/product/[id]` - Individual product pages
- **Search**: `/search?q=query` - Search for products
- **Cart**: `/cart` - Shopping cart (currently placeholder)

## Project Structure

```
Project/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── category/          # Category pages
│   ├── product/           # Product detail pages
│   ├── products/          # All products page
│   ├── search/            # Search page
│   └── cart/              # Shopping cart
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product card component
│   └── ProductCarousel.tsx # Product carousel
├── data/                  # Data files
│   ├── products.ts        # Product data
│   └── categories.ts      # Category data
└── types/                 # TypeScript types
    └── index.ts           # Type definitions
```

## Customization

### Adding Products

Edit `data/products.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  image: '/images/product.jpg',
  category: 'gps-gnss',
  inStock: true,
  stockStatus: 'in_stock',
  featured: false,
  specifications: {
    'Spec 1': 'Value 1',
    'Spec 2': 'Value 2'
  },
  tags: ['tag1', 'tag2']
}
```

### Adding Categories

Edit `data/categories.ts` to add new product categories.

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Adding Images

1. Create a `public/images/` directory
2. Add product images
3. Update product data with image paths: `image: '/images/your-image.jpg'`

## Next Steps

### Recommended Enhancements

1. **Database Integration**
   - Replace static data with a database (PostgreSQL, MongoDB, etc.)
   - Use Prisma or similar ORM

2. **Shopping Cart State**
   - Implement cart state management (Context API, Zustand, Redux)
   - Add localStorage persistence

3. **User Authentication**
   - Add login/register functionality
   - Implement user accounts and order history

4. **Payment Processing**
   - Integrate Stripe or PayPal
   - Add checkout flow

5. **Admin Dashboard**
   - Product management interface
   - Order management
   - Inventory tracking

6. **Enhanced Features**
   - Product reviews and ratings
   - Product comparison
   - Wishlist functionality
   - Email notifications
   - Advanced filtering

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repo
- **AWS Amplify**: Deploy via AWS Console
- **Self-hosted**: Use `npm run build` and `npm start`

## Troubleshooting

### Port Already in Use

If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### TypeScript Errors

Run type checking:
```bash
npx tsc --noEmit
```

### Build Errors

Clear Next.js cache:
```bash
rm -rf .next
npm run build
```

## Support

For issues or questions:
1. Check the README.md for detailed documentation
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS docs: https://tailwindcss.com/docs

Happy coding! 🚀
