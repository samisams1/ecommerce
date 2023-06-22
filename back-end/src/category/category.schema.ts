import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category {
    @Prop({required:true})
    title:String;
    @Prop({unique:true,slug:"title"})
    slug:String;

}

export type CategoryDocument = Category &  Document;
export const CategorySchema = SchemaFactory.createForClass(Category);