import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async create(productData: Partial<Product>): Promise<Product> {
    const product = this.productRepository.create(productData);
    return this.productRepository.save(product);
  }

  async getPaginatedProducts(page: number, limit: number) {
    page = Math.max(1, page);
    limit = Math.min(100, limit);

    const [products, total] = await this.productRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data: products,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getSortedProducts(sort: string, order: 'ASC' | 'DESC') {
    const validFields = ['name', 'price', 'category'];
    if (!validFields.includes(sort)) {
      throw new Error('Invalid sort field');
    }

    const validOrder: 'ASC' | 'DESC' =
      order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    return this.productRepository.find({
      order: {
        [sort]: validOrder,
      },
    });
  }

  async getFilteredProducts(
    priceMin?: number,
    priceMax?: number,
    name?: string,
  ) {
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (priceMin) {
      queryBuilder.andWhere('product.price >= :priceMin', { priceMin });
    }

    if (priceMax) {
      queryBuilder.andWhere('product.price <= :priceMax', { priceMax });
    }

    if (name) {
      queryBuilder.andWhere('product.name LIKE :name', { name: `%${name}%` });
    }

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({ where: { id } });
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
