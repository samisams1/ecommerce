import { ObjectType, Field, InputType, HideField, GraphQLISODateTime } from '@nestjs/graphql';
import { RoleType } from '../user.shema';

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
    
    @Field()
    name: string;

	@Field()
	username: string;

	@Field()
	email: string;

	@Field(() => String, { nullable: true })
	fullName?: string;

	@HideField()
	password: string;

	@Field(() => String, { nullable: true })
	avatar?: string;

	@Field(() => String, { nullable: true, defaultValue: RoleType.USER })
	role: RoleType; 

	@HideField()
	currentHashedRefreshToken?: string;

	@Field(() => GraphQLISODateTime)
	createdAt?: Date;

	@Field(() => GraphQLISODateTime)
	updatedAt?: Date;

}