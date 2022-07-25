import { ObjectType, Field, InputType } from "@nestjs/graphql";
import { Prop } from "@nestjs/mongoose";
import mongoose from "mongoose";

@ObjectType('CategoryType1')
@InputType('CategoryInputType1')
class Categories {
    @Field()
    title:string;
}


@ObjectType('ProductType')
@InputType('ProductInputType')
export class ProductType {
    @Field({defaultValue:true})
    title: string;
    @Field()
    productCode:String;
    @Field()
    description:String;
    @Field()
    price:Number;
    @Field()
    quantity:Number
    @Field()
    imagePath:String;
    @Field()
    manufacture:String;
    @Field()
    barcode:String;
    @Field()
    available:Boolean;
    @Field()
    createdAt:Date;
    @Field()
    categories:Categories;
    @Field()
    user:String;
   
}





