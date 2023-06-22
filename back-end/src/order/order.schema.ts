import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

class Product {
    @Prop()
    title:String;
    @Prop()
    price:Number;
    @Prop()
    quantity :Number;  
}
class Address {
    @Prop()
    city:string
}
class User {
    @Prop()
    name:string
}

@Schema()
export class Order {

@Prop({required:true})
products: [Product]
@Prop({required:true})
totalPrice:Number;
@Prop()
address:Address
@Prop({default:"pending"})
status:string
@Prop({default:Date.now})
createdAt:Date;
@Prop()
user:User
}

export  type OrderDocument = Order & Document;
export  const OrderSchema = SchemaFactory.createForClass(Order);

