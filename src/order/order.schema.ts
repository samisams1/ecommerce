import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Order {
@Prop({required:true})
owner:string;
@Prop({required:true})
totalPrice:Number;
@Prop({required:true})
products:[   
product: string,
quantity :Number   
]
@Prop({default:Date.now})
createdAt:Date;
}

export  type OrderDocument = Order & Document;
export  const OrderSchema = SchemaFactory.createForClass(Order);

