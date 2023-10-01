import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './cart.schema';


@Injectable()
export class CartService {
    constructor(
        @InjectModel('Cart') private categoryModel: Model<Cart>,
      ) {}

  async create(categoryData: Cart): Promise<Cart> {
    const category = new this.categoryModel(categoryData);
    return category.save();
  }

  async findAll(): Promise<Cart[]> {
    return this.categoryModel.find().exec();
  }

  async findById(id: number): Promise<Cart> {
    return this.categoryModel.findOne({ id }).exec();
  }

  async update(id: number, categoryData: Cart): Promise<Cart> {
    return this.categoryModel.findOneAndUpdate({ id }, categoryData, {
      new: true,
    }).exec();
  }

  async delete(id: number): Promise<Cart> {
    return this.categoryModel.findOneAndDelete({ id }).exec();
  }
}