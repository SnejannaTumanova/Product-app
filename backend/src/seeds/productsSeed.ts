import { getRepository } from 'typeorm';
import { Product } from '../entities/product.entity';

const seedProducts = async () => {
  const productRepository = getRepository(Product);

  const products = [
    {
      name: 'Product 1',
      price: 100,
      description: 'Description for product 1',
      sku: 'SKU1',
      photo: 'https://example.com/product1.jpg',
    },
    {
      name: 'Product 2',
      price: 150,
      description: 'Description for product 2',
      sku: 'SKU2',
      photo: 'https://example.com/product2.jpg',
    },
    {
      name: 'Product 3',
      price: 200,
      description: 'Description for product 3',
      sku: 'SKU3',
      photo: 'https://example.com/product3.jpg',
    },
    {
      name: 'Product 4',
      price: 250,
      description: 'Description for product 4',
      sku: 'SKU4',
      photo: 'https://example.com/product4.jpg',
    },
    {
      name: 'Product 5',
      price: 300,
      description: 'Description for product 5',
      sku: 'SKU5',
      photo: 'https://example.com/product5.jpg',
    },
    {
      name: 'Product 6',
      price: 350,
      description: 'Description for product 6',
      sku: 'SKU6',
      photo: 'https://example.com/product6.jpg',
    },
    {
      name: 'Product 7',
      price: 400,
      description: 'Description for product 7',
      sku: 'SKU7',
      photo: 'https://example.com/product7.jpg',
    },
  ];

  await productRepository.save(products);

  console.log('Seeded products to the database.');
};

seedProducts().catch((error) => {
  console.error('Error seeding products:', error);
  process.exit(1);
});
