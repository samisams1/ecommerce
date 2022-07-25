import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document, trusted } from "mongoose";
import { Category } from "src/category/category.schema";

class Categories {
    title:string;
}
@Schema()
export class Product {
    @Prop({required:true})
    title:String;
    @Prop({required:true,unique:true})
    productCode:String;
    @Prop({required:true})
    description:String;
    @Prop({required:true,min:[0,"Price cannot less than 0."]})
    price:Number;
    @Prop({required:true,min:[0,"This product is out of stock."]})
    quantity:Number;
    @Prop({required:true})
    imagePath:String;
    @Prop({required:true})
    manufacture:String;
    @Prop()
    barcode:String;
    /*@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    category: mongoose.Schema.Types.ObjectId;
    */@Prop()
    categories:Categories;
    @Prop({required:true})
    available:Boolean;
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: mongoose.Schema.Types.ObjectId;
    @Prop({default:Date.now})
    createdAt:Date
}
    export type ProductDocument = Product & Document;
    export const ProductSchema = SchemaFactory.createForClass(Product);
