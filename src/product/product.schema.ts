import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Product {
    @Prop()
    title:String;
    @Prop()
    productCode:String;
    @Prop()
    description:String;
    @Prop()
    price:String;
    @Prop()
    imagePath:String;
    @Prop()
    manufacture:String;
    @Prop()
    available:Boolean;

}
    export type ProductDocument = Product & Document;
    export const ProductSchema = SchemaFactory.createForClass(Product);
