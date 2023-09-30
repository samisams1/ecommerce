import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {  Category } from './category.shema';


@Injectable()
export class CategoryService {
    constructor(
        @InjectModel('Category') private categoryModel: Model<Category>,
      ) {}

  async create(categoryData: Category): Promise<Category> {
    const category = new this.categoryModel(categoryData);
    return category.save();
  }

  async findAll(): Promise<Category[]> {
    return this.categoryModel.find().exec();
  }

  async findById(id: number): Promise<Category> {
    return this.categoryModel.findOne({ id }).exec();
  }

  async update(id: number, categoryData: Category): Promise<Category> {
    return this.categoryModel.findOneAndUpdate({ id }, categoryData, {
      new: true,
    }).exec();
  }

  async delete(id: number): Promise<Category> {
    return this.categoryModel.findOneAndDelete({ id }).exec();
  }
}