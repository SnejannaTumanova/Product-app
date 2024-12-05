import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('numeric')
  price: number;

  @Column()
  description: string;

  @Column()
  sku: string;

  @Column({ nullable: true })
  photo: string | null;

  constructor() {
    this.id = 0;
    this.name = '';
    this.price = 0;
    this.description = '';
    this.sku = '';
    this.photo = null;
  }
}
