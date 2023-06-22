import { Field, InputType, ObjectType } from "@nestjs/graphql";


@ObjectType('ShippingObjectType')
@InputType('ShippingnputType')

export class ShippingType {
@Field()
type:string;
@Field()
price:number;
@Field()
status:string;
}





