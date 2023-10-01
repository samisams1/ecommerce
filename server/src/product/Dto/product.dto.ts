import { ObjectType, Field, InputType, ID, Int, Float, GraphQLISODateTime } from '@nestjs/graphql';
import { User } from 'src/user/user.shema';

@ObjectType('ProductType')
@InputType('ProductInputType')
export class ProductType {
   
    @Field(() => ID)
	_id: string;

   @Field(() => String)
    name: string;

	@Field(() => String)
	image: string;

	@Field(() => String)
	brand: string;

	@Field(() => String)
	category: string;

	@Field(() => String)
	description: string;

	@Field(() => Int)
	rating: number;

	@Field(() => Int)
	numReviews: number;

	@Field(() => Float)
	price: number;

	@Field(() => Int)
	countInStock: number;

	/* @Field(() => [Review])
	reviews: any[]; */

	/*@Field(() => User)
	user: User; */

	@Field(() => GraphQLISODateTime)
	createdAt: Date;

	@Field(() => GraphQLISODateTime)
	updatedAt: Date;


}