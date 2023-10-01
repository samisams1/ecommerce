import { Resolver, Query, } from '@nestjs/graphql';
import { ProductType } from './Dto/product.dto';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  constructor(private categoryService: ProductService) {}

  @Query(() => [ProductType])
  async products(): Promise<Product[]> {
    return this.categoryService.findAll();
  }
}
