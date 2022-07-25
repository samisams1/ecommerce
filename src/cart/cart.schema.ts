import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { now } from "mongoose";
import { Product } from "src/product/product.schema";
import { User } from "src/user/user.schema";

@Schema()
export class Cart {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Product' })
    category: mongoose.Schema.Types.ObjectId;
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user:mongoose.Schema.Types.ObjectId;
    @Prop()
    status:String;
    @Prop()
    paymentStatus:Boolean;
    @Prop()
    deliveryStatus:Boolean;
    @Prop({default:Date.now})
    createdAt:Date

    

}
export type  CartDocument = Cart & Document;
export const CartSchema = SchemaFactory.createForClass(Cart);