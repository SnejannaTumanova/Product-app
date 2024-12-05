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

  async getProducts(params: {
    page: number;
    limit: number;
    sort: string;
    order: 'ASC' | 'DESC';
    priceMin?: number;
    priceMax?: number;
    name?: string;
  }) {
    const { page, limit, sort, order, priceMin, priceMax, name } = params;

    const queryBuilder = this.productRepository.createQueryBuilder('product');

    //Фильтрация
    if (priceMin !== undefined) {
      queryBuilder.andWhere('product.price >= :priceMin', { priceMin });
    }
    if (priceMax !== undefined) {
      queryBuilder.andWhere('product.price <= :priceMax', { priceMax });
    }
    if (name) {
      queryBuilder.andWhere('product.name ILIKE :name', { name: `%${name}%` });
    }

    //Сортировка
    const validFields = ['name', 'price'];
    if (validFields.includes(sort)) {
      queryBuilder.orderBy(
        sort === 'price' ? 'product.price' : `product.${sort}`,
        order,
      );
    }

    //Пагинация
    const total = await queryBuilder.getCount();
    queryBuilder.skip((page - 1) * limit).take(limit);

    const data = await queryBuilder.getMany();

    return {
      data,
      total,
      page,
      lastPage: Math.ceil(total / limit),
    };
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
