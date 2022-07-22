import { ObjectType, Field, InputType } from "@nestjs/graphql";


@ObjectType('ProductType')
@InputType('ProductInputType')
export class ProductType {
    @Field()
    title: string;
    @Field()
    productCode:String;
    @Field()
    description:String;
    @Field()
    price:String;
    @Field()
    imagePath:String;
    @Field()
    manufacture:String;
    @Field()
    available:Boolean;
   
}