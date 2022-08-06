import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartType } from './cart.dto';
import { Cart, CartDocument } from './cart.schema';

@Injectable()
export class CartService {
    constructor(@InjectModel(Cart.name) private cartModel:Model<CartDocument>){}

    async findAll():Promise<Cart[]> {
        return this.cartModel.find().exec();
    } 
   async create(createCartDto:CartType):Promise<Cart>{
    const createCart = new this.cartModel(createCartDto);
    return createCart.save();
   }
   async update(id: string, updateAddressDto: CartType): Promise<Cart> {
    return this.cartModel.findByIdAndUpdate(id, updateAddressDto);
 }
  async delete(id: string): Promise<Cart> {
    return this.cartModel.findByIdAndDelete(id);
}
}
