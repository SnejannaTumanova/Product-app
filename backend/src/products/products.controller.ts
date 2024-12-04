import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() productData: Partial<Product>): Promise<Product> {
    return this.productsService.create(productData);
  }

  @Get()
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get('paginated')
  async getProducts(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.productsService.getPaginatedProducts(page, limit);
  }

  @Get('sorted')
  async getSortedProducts(
    @Query('sort') sort = 'name',
    @Query('order') order: 'ASC' | 'DESC' = 'ASC',
  ) {
    return this.productsService.getSortedProducts(sort, order);
  }

  @Get('filtered')
  async getFilteredProducts(
    @Query('priceMin') priceMin?: number,
    @Query('priceMax') priceMax?: number,
    @Query('name') name?: string,
  ) {
    return this.productsService.getFilteredProducts(priceMin, priceMax, name);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() productData: Partial<Product>,
  ): Promise<Product> {
    return this.productsService.update(+id, productData);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<{ message: string }> {
    await this.productsService.remove(+id);
    return { message: 'Product deleted successfully' };
  }

  @Post(':id/photo')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadPhoto(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const product = await this.productsService.findOne(+id);
    if (!product) {
      throw new Error('Product not found');
    }
    return { photo: file.filename };
  }
}
