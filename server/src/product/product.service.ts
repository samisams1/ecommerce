import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private productModel: Model<Product>,
      ) {}

  async create(categoryData: Product): Promise<Product> {
    const category = new this.productModel(categoryData);
    return category.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findById(id: number): Promise<Product> {
    return this.productModel.findOne({ id }).exec();
  }

  async update(id: number, categoryData: Product): Promise<Product> {
    return this.productModel.findOneAndUpdate({ id }, categoryData, {
      new: true,
    }).exec();
  }

  async delete(id: number): Promise<Product> {
    return this.productModel.findOneAndDelete({ id }).exec();
  }
}