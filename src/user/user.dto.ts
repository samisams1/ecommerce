import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
 @Field()
 username:string;
 @Field()
 email:string;
 @Field()
 password:string;
 @Field()
 firstName:string;
 @Field()
 lastName:string;
}
