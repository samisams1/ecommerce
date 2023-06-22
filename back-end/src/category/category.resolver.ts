import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryType } from './category.dto';
import { CategoryService } from './category.service';


@Resolver()
export class CategoryResolver {
    constructor(private readonly categoryService: CategoryService) {}

    @Query(returns => [CategoryType])
    async categories() {
        return this.categoryService.findAll();
    }
    @Mutation(returns => CategoryType)
     async createCategory(@Args('input') input:CategoryType) {
        return this.categoryService.create(input);
     }
    @Mutation(returns =>CategoryType)
    async updateCategory(@Args('id') id:string,  @Args('input') input:CategoryType) {
        return  this.categoryService.update(id,input);
    }
    @Mutation(returns => CategoryType)
    async deleteCategory(@Args('id') id: string) {
    return this.categoryService.delete(id);
}  
   
}






 