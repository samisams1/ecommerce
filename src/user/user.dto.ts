import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
 @Field()
 title:string;
}

