import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
 export class Address {

    @Prop()
    city:string;
    @Prop()
    houseNumber:string;
 }
export type AddressDocument = Address &  Document;
export const AddressSchema = SchemaFactory.createForClass(Address);

