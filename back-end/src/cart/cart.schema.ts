import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

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
export class Cart {
    @Prop()
    user:User;
    @Prop()
    products:Product;
    @Prop({required:true})
    totalPrice:Number;
    @Prop()
    address:Address;
    @Prop()
    paymentStatus:boolean;
    @Prop()
    deliveryStatus:boolean;
    @Prop({default:Date.now})
    createdAt:Date
}
export type  CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);