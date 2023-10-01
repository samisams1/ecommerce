import { Model } from 'mongoose';
import { User } from './user.shema';
export declare class UserService {
    private categoryModel;
    constructor(categoryModel: Model<User>);
    create(categoryData: User): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    update(id: number, categoryData: User): Promise<User>;
    delete(id: number): Promise<User>;
}
