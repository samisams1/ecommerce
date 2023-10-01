import { Model } from 'mongoose';
import { Cart } from './cart.schema';
export declare class CartService {
    private categoryModel;
    constructor(categoryModel: Model<Cart>);
    create(categoryData: Cart): Promise<Cart>;
    findAll(): Promise<Cart[]>;
    findById(id: number): Promise<Cart>;
    update(id: number, categoryData: Cart): Promise<Cart>;
    delete(id: number): Promise<Cart>;
}
