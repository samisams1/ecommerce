import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
@ObjectType('UserType1')
@InputType('UserInput1')
class User {
  @Field()   
  name:String
}
@ObjectType('AddressType')
@InputType('Address')
class AddressType  {
 @Field() 
 city:String;
}
@ObjectType('ProductType1')
@InputType('ProductInput')
class Product  {
 @Field() 
 title:String;
 @Field() 
 price:Number;
 @Field(()=>Int) 
 quantity:Number;
}
@ObjectType('OrderType')
@InputType('OrderInputType')
export class OrderType {
@Field() 
totalPrice:Number
@Field()
status:string
@Field(()=>[Product])
products:Product[];
@Field()
address:AddressType
@Field()
user:User
}