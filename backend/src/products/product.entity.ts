import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @Column('decimal', { nullable: true })
  discountPrice: number;

  @Column({ unique: true })
  sku: string;

  @Column({ nullable: true })
  photo: string;
}
