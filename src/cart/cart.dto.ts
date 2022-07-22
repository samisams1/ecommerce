import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType('CartType')
@InputType('CartInputType')

export class CartType {
    @Field()
    title:string;
}