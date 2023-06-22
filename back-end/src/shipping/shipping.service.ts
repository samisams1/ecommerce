import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shipping, ShippingDocument } from './shiping.schema';
import { ShippingType } from './shipping.dto';


@Injectable()
export class ShippingService {
    constructor(@InjectModel(Shipping.name) private shippingModel:Model<ShippingDocument>){}

    async findAll():Promise<Shipping[]> {
        return this.shippingModel.find().exec();
    } 
    async create(createShippingDto:ShippingType):Promise<Shipping> {
         const createShipping = new  this.shippingModel(createShippingDto);
          return createShipping.save();
    }
    async update(id:string,updateShippingDto:ShippingType):Promise<Shipping> {
       return this.shippingModel.findByIdAndUpdate(id,updateShippingDto);
    }
    async delete(id:string) {
     return this.shippingModel.findByIdAndDelete(id);
    }
}  
       
