import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Category {
    @Prop()
    title:String;
}

export type CategoryDocument = Category &  Document;
export const CategorySchema = SchemaFactory.createForClass(Category);