import { ObjectType, Field, InputType } from '@nestjs/graphql';

@ObjectType('CategoryType')
@InputType('CategoryInputType')
export class CategoryType {
    
    @Field()
    name: string;

}