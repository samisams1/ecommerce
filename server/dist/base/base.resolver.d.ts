import { BaseService } from './base.service';
export declare class BaseResolver<T> {
    private readonly service;
    constructor(service: BaseService<T>);
    getAll(): Promise<T[]>;
    getById(id: string): Promise<T>;
    create(createDto: Partial<T>): Promise<T>;
    update(id: string, updateDto: Partial<T>): Promise<T>;
    delete(id: string): Promise<T>;
}
