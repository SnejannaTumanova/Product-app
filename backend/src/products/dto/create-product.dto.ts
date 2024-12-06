import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsString()
  sku: string;

  @IsOptional()
  @IsString()
  photo?: string;

  constructor() {
    this.name = '';
    this.price = 0;
    this.description = '';
    this.sku = '';
    this.photo = '';
  }
}
