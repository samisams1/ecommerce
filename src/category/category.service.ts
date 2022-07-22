import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category, CategoryDocument } from './category.schema';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(Category.name) private CategoryModel:Model<CategoryDocument>){}

    async findAll():Promise<Category[]> {
        return this.CategoryModel.find().exec();
    } 
}   
    
