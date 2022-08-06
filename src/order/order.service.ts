import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderType } from './order.dto';
import { Order, OrderDocument } from './order.schema';

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel:Model<OrderDocument>){}

    async findAll():Promise<Order[]>{
          return this.orderModel.find().exec();
    }
    async create(createOrderDto:OrderType):Promise<Order>{
        const createOrder = new this.orderModel(createOrderDto);
        return createOrder.save();
    }
}
