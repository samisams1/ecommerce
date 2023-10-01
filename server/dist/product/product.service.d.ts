import { Model } from 'mongoose';
import { Product } from './product.schema';
export declare class ProductService {
    private productModel;
    constructor(productModel: Model<Product>);
    create(categoryData: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findById(id: number): Promise<Product>;
    update(id: number, categoryData: Product): Promise<Product>;
    delete(id: number): Promise<Product>;
}
