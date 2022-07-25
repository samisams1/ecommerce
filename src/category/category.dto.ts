import { Field, InputType, ObjectType } from "@nestjs/graphql";


@ObjectType('CategoryType')
@InputType('CategoryInputType')

export class CategoryType {
@Field()
title:string;
@Field()
slug:"title"
}




