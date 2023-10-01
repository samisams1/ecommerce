import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types,Document } from "mongoose";
import { User } from "src/user/user.shema";


@Schema()
export class Product {
   
	@Prop({ type: String, required: true })
	name: string;

	@Prop({ type: String, required: true, default: 'https://i.imgur.com/Vih6Km5.png' })
	image: string;

	@Prop({ type: String, required: true })
	brand: string;

	@Prop({ type: String, required: true })
	category: string;

	@Prop({ type: String, required: true })

	description: string;

	@Prop({ type: Number, required: true, default: 0 })
	rating: number;

	@Prop({ type: Number, required: true, default: 0 })
	numReviews: number;

	@Prop({ type: Number, required: true, default: 0.0 })
	price: number;

	@Prop({ type: Number, required: true, default: 0 })
	countInStock: number;

	/* @Prop({ type: [{ type: Types.ObjectId, ref: Review.name }], default: [] })
	reviews: any[]; */

	/*@Prop({ type: Types.ObjectId, ref: User.name, required: true })
	user: User; */

	@Prop({ type: Date, default: Date.now })
	createdAt: Date;

	@Prop({ type: Date, default: Date.now })
	updatedAt: Date;
}

export type ProductDocument = Product & Document;
export const ProductSchema = SchemaFactory.createForClass(Product);

