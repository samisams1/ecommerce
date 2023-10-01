import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType('UserType')
@InputType('ProductInputType')
export class UserType {
    
    @Field()
    name: string;

}