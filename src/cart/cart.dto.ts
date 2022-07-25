import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType('CartType')
@InputType('CartInputType')

export class CartType {
    @Field()
    product:string;
    @Field()
    user:string;
    @Field()
    status:string;
    @Field()
    paymentStatus:Boolean;
    @Field()
    deliveryStatus:Boolean;
}

