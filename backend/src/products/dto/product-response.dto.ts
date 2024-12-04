export class ProductResponseDto {
  id: number;
  name: string;
  description: string;
  price: number;
  sku: string;
  photo: string;

  constructor(entity: any) {
    this.id = entity.id;
    this.name = entity.name;
    this.description = entity.description;
    this.price = Number(entity.price);
    this.sku = entity.sku;
    this.photo = entity.photo;
  }
}
