import { Model } from 'mongoose';

export abstract class BaseService<T> {
  constructor(private readonly model: Model<T>) {}

  protected getModel(): Model<T> {
    return this.model;
  }

  async findAll(): Promise<T[]> {
    return this.getModel().find().exec();
  }

  async findById(id: string): Promise<T> {
    return this.getModel().findById(id).exec();
  }

  async create(createDto: Partial<T>): Promise<T> {
    return this.getModel().create(createDto);
  }

  async update(id: string, updateDto: Partial<T>): Promise<T> {
    return this.getModel().findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async delete(id: string): Promise<T> {
    return this.getModel().findByIdAndDelete(id).exec();
  }
}