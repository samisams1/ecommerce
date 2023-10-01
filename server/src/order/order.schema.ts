import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import {Types, Document } from "mongoose";
import { User } from "src/user/user.shema";

@Schema()
export class Order{
    
	@Prop({ type: String, required: true })
	
	paymentMethod: string;

	@Prop({ type: Number, required: true, default: 0.0 })
	
	taxPrice: number;

	@Prop({ type: Number, required: true, default: 0.0 })
	
	shippingPrice: number;

	@Prop({ type: Number, required: true, default: 0.0 })
	
	totalPrice: number;

	@Prop({ type: Boolean, required: true, default: false })
	
	isPaid: boolean;

	@Prop({ type: Date, required: false })
	paidAt: Date;

	@Prop({ type: Boolean, required: true, default: false })
	isDelivered: boolean;

	@Prop({ type: Date, required: false })
	deliveredAt: Date;

	@Prop({ type: Types.ObjectId, ref: User.name, required: true })
	user: User;

	/*@Prop({ type: [{ type: Types.ObjectId, ref: OrderItem.name }] })
	orderItems: OrderItem[]; */

	/* @Prop({ type: Types.ObjectId, ref: ShippingAddress.name })
	shippingAddress: ShippingAddress; */

	/*@Prop({ type: Types.ObjectId, ref: PaymentResult.name })
	paymentResult: PaymentResult; */

	@Prop({ type: Date, default: Date.now })
	createdAt: Date;

	/*@Prop({ type: Date, default: Date.now })
	@Field(() => GraphQLISODateTime)  */
	updatedAt: Date;
}
export type OrderDocument = Order & Document;
export const  OrderSchema = SchemaFactory.createForClass(Order);

