import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType('OrderType')
@InputType('OrderInputType')
export class OrderType {
@Field()
name:string;
}