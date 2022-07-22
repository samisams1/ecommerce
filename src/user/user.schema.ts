import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class User {
    @Prop()
    name:String;

}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);