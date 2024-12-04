import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

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
    const validFields = ['name', 'price'];
    if (!validFields.includes(sort)) {
      throw new Error('Invalid sort field');
    }

    const query = this.productRepository
      .createQueryBuilder('product')
      .orderBy(sort === 'price' ? 'product.price' : `product.${sort}`, order);

    return query.getMany();
  }

  async getFilteredProducts(
    priceMin?: number,
    priceMax?: number,
    name?: string,
  ) {
    const queryBuilder = this.productRepository.createQueryBuilder('product');

    if (priceMin !== undefined) {
      queryBuilder.andWhere('product.price >= :priceMin', { priceMin });
    }

    if (priceMax !== undefined) {
      queryBuilder.andWhere('product.price <= :priceMax', { priceMax });
    }

    if (name) {
      queryBuilder.andWhere('product.name ILIKE :name', { name: `%${name}%` });
    }

    return queryBuilder.getMany();
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
    return product;
  }

  async update(id: number, productData: Partial<Product>): Promise<Product> {
    await this.productRepository.update(id, productData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.productRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }
}
