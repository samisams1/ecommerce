import { Model } from 'mongoose';
import { Category } from './category.shema';
export declare class CategoryService {
    private categoryModel;
    constructor(categoryModel: Model<Category>);
    create(categoryData: Category): Promise<Category>;
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    update(id: number, categoryData: Category): Promise<Category>;
    delete(id: number): Promise<Category>;
}
