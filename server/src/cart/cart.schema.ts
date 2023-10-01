import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Cart{
    @Prop()
    name:String;
}
export type CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);