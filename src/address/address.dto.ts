import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType('AddressObjectType')
@InputType('AddressInputType')
export class AddressType {
    @Field()
    city:string
}

