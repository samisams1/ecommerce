import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryType } from './category.dto';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private CategoryModel:Model<CategoryDocument>){}

    async findAll():Promise<Category[]> {
        return this.CategoryModel.find().exec();
    } 
     async create(createCategoryDto: CategoryType) :Promise<Category> {
          const createCategory = new this.CategoryModel(createCategoryDto);
          return createCategory.save();
     }
    async update(id: string, updateCategoryDto: CategoryType): Promise<Category> {
        return this.CategoryModel.findByIdAndUpdate(id, updateCategoryDto);
     }
    async delete(id: string): Promise<Category> {
        return this.CategoryModel.findByIdAndDelete(id);
     }
}   

    
