import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductType } from './product.dto';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
constructor(@InjectModel(Product.name) private productModel:Model<ProductDocument>) {}
   
    async findAll():Promise<Product[]> {
        return this.productModel.find().exec();
    } 
    async create(createProductDto:ProductType):Promise<Product>{
        const createProduct = new this.productModel(createProductDto);
        return createProduct.save();
    }
}
