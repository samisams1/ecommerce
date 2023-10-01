import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './category.shema';
import { CategoryType } from './Dto/category.dto';

@Resolver()
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [CategoryType])
  async categories(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Query(() => CategoryType)
  async category(@Args('id', { type: () => Int }) id: number): Promise<Category> {
    return this.categoryService.findById(id);
  }

  @Mutation(() => CategoryType)
  async createCategory(@Args('category') category: CategoryType): Promise<Category> {
    return this.categoryService.create(category);
  }
 
  /*@Mutation(() => CategoryType)
  async updateCategory(
    @Args('id', { type: () => Int }) id: number,
    @Args('category') category: Category,
  ): Promise<Category> {
    return this.categoryService.update(id, category);
  }

  @Mutation(() => CategoryType)
  async deleteCategory(@Args('id', { type: () => Int }) id: number): Promise<Category> {
    return this.categoryService.delete(id);
  }*/
}