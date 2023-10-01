
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.shema';
@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private categoryModel: Model<User>,
      ) {}

  async create(categoryData: User): Promise<User> {
    const category = new this.categoryModel(categoryData);
    return category.save();
  }

  async findAll(): Promise<User[]> {
    return this.categoryModel.find().exec();
  }

  async findById(id: number): Promise<User> {
    return this.categoryModel.findOne({ id }).exec();
  }

  async update(id: number, categoryData: User): Promise<User> {
    return this.categoryModel.findOneAndUpdate({ id }, categoryData, {
      new: true,
    }).exec();
  }

  async delete(id: number): Promise<User> {
    return this.categoryModel.findOneAndDelete({ id }).exec();
  }
}