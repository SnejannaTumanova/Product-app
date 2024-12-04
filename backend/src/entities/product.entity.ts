import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Transform } from 'class-transformer';

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
}
