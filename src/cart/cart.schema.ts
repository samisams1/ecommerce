import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Product } from "src/product/product.schema";
import { User } from "src/user/user.schema";

@Schema()
export class Cart {
    @Prop()
    title:String;
    

}
export type  CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);