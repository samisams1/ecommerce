import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartDocument } from './cart.schema';

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartModel:Model<CartDocument>){}

    async findAll():Promise<Cart[]> {
        return this.cartModel.find().exec();
    } 
}
