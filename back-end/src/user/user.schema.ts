import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { StringExpression } from "mongoose";


@Schema()
export class User {
    @Prop({required:true,unique:true})
    username:String;
    @Prop({required:true})
    email:String;
    @Prop({required:true})
    password:String;
    @Prop({required:true})
    firstName:String;
    @Prop({required:true})
    lastName:string;



}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);