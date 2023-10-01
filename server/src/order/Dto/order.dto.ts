import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType('OrderType')
@InputType('OrderInputType')
export class OrderType {
    
    @Field()
    name: string;

}