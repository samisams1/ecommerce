import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

class Product {
    @Prop()
    title:string;
    price:Number;
}
@Schema()
export class Order {
@Prop({required:true})
owner:string;
@Prop({required:true})
totalPrice:Number;
@Prop({required:true})
products:[  
product: Product,
quantity :Number   
]
@Prop({default:Date.now})
createdAt:Date;
}

export  type OrderDocument = Order & Document;
export  const OrderSchema = SchemaFactory.createForClass(Order);

