import { Product } from './product.schema';
import { ProductService } from './product.service';
export declare class ProductResolver {
    private categoryService;
    constructor(categoryService: ProductService);
    products(): Promise<Product[]>;
}
