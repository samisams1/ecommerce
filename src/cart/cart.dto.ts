import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { AddressType } from "src/address/address.dto";
import { ProductType } from "src/product/product.dto";
import { UserType } from "src/user/user.dto";
import { User } from "src/user/user.schema";


@ObjectType('CartType')
@InputType('CartInputType')

export class CartType {
    @Field()
    user:UserType;
    @Field(()=>[ProductType])
    products:ProductType[];
    @Field()
    address:AddressType;
    @Field()
    paymentStatus:Boolean;
    @Field()
    deliveryStatus:Boolean;
}

