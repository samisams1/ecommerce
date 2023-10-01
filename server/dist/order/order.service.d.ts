import { Model } from 'mongoose';
import { Order } from './order.schema';
export declare class OrderService {
    private categoryModel;
    constructor(categoryModel: Model<Order>);
    create(categoryData: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
    findById(id: number): Promise<Order>;
    update(id: number, categoryData: Order): Promise<Order>;
    delete(id: number): Promise<Order>;
}
