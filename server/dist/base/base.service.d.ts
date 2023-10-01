import { Model } from 'mongoose';
export declare abstract class BaseService<T> {
    private readonly model;
    constructor(model: Model<T>);
    protected getModel(): Model<T>;
    findAll(): Promise<T[]>;
    findById(id: string): Promise<T>;
    create(createDto: Partial<T>): Promise<T>;
    update(id: string, updateDto: Partial<T>): Promise<T>;
    delete(id: string): Promise<T>;
}
