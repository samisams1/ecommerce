import { ObjectType, Field, InputType, Float, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { User } from 'src/user/user.shema';

@ObjectType('OrderType')
@InputType('OrderInputType')
export class OrderType {
    
    @Field()
    name: string;
    

    @Field(() => ID)
	_id: string;

	@Field(() => String)
	paymentMethod: string;

	@Field(() => Float)
	taxPrice: number;

	@Field(() => Float)
	shippingPrice: number;

	@Field(() => Float)
	totalPrice: number;

	@Field(() => Boolean)
	isPaid: boolean;

	@Field(() => GraphQLISODateTime, { nullable: true })
	paidAt: Date;

	@Field(() => Boolean)
	isDelivered: boolean;

	@Field(() => GraphQLISODateTime, { nullable: true })
	deliveredAt: Date;

	@Field(() => User)
	user: User;

	/*@Field(() => [OrderItem])
	orderItems: OrderItem[];

	@Field(() => ShippingAddress)
	shippingAddress: ShippingAddress;

	@Field(() => PaymentResult)
	paymentResult: PaymentResult; */

	@Field(() => GraphQLISODateTime)
	createdAt: Date;

	@Field(() => GraphQLISODateTime)
	updatedAt: Date;

}