import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType('UserType')
@InputType('UserInputType')
export class UserType {
    
    @Field()
    name: string;

}