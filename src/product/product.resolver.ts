import { Query, Resolver } from '@nestjs/graphql';
import { ProductType } from './product.dto';
import { ProductService } from './product.service';


@Resolver()
export class ProductResolver {
    constructor(private readonly productService: ProductService) {}

    @Query(returns => [ProductType])
    async products() {
        return this.productService.findAll();
    }
   
}






 