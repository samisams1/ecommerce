import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType('ProductType')
@InputType('ProductInputType')
export class ProductType {
    
    @Field()
    name: string;

}