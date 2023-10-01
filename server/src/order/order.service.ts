import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';


@Injectable()
export class OrderService {
    constructor(
        @InjectModel('Order') private categoryModel: Model<Order>,
      ) {}

  async create(categoryData: Order): Promise<Order> {
    const category = new this.categoryModel(categoryData);
    return category.save();
  }

  async findAll(): Promise<Order[]> {
    return this.categoryModel.find().exec();
  }

  async findById(id: number): Promise<Order> {
    return this.categoryModel.findOne({ id }).exec();
  }

  async update(id: number, categoryData: Order): Promise<Order> {
    return this.categoryModel.findOneAndUpdate({ id }, categoryData, {
      new: true,
    }).exec();
  }

  async delete(id: number): Promise<Order> {
    return this.categoryModel.findOneAndDelete({ id }).exec();
  }
}