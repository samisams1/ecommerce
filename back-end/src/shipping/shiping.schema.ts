import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Shipping { 
    @Prop()
    type:string;
    @Prop()
    price:number;
    @Prop()
    status:string;
    @Prop({default:Date.now})
    createdAt:Date;
}
export type ShippingDocument = Shipping &  Document;
export const ShippingSchema = SchemaFactory.createForClass(Shipping);