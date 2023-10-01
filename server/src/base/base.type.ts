import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class BaseType {
  @Field(() => ID)
  id: string;

  // Add other common fields if needed
}