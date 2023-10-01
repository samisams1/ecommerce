import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Order{
    @Prop()
    name:String
}
export type OrderDocument = Order & Document;
export const  OrderSchema = SchemaFactory.createForClass(Order);

