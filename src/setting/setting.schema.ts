import { SchemaFactory } from "@nestjs/mongoose";
import  { Document } from "mongoose";

const { Schema, Prop } = require("@nestjs/mongoose");

@Schema()
export class Setting {
    @Prop({required:true})
    title:String;
    description:String;
    @Prop()
    logo:String;
    @Prop()
    address:String;
    @Prop({default:Date.now})
    createdAt:Date;
}
export type SettingDocument = Setting & Document;
export const SettingSchema = SchemaFactory.createForClass(Setting);