import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { BaseType } from './base.type';
import { BaseService } from './base.service';

@Resolver()
export class BaseResolver<T> {
  constructor(private readonly service: BaseService<T>) {}

  @Query(() => [BaseType])
  async getAll(): Promise<T[]> {
    return this.service.findAll();
  }

  @Query(() => BaseType)
  async getById(@Args('id') id: string): Promise<T> {
    return this.service.findById(id);
  }

  @Mutation(() => BaseType)
  async create(@Args('createDto') createDto: Partial<T>): Promise<T> {
    return this.service.create(createDto);
  }

  @Mutation(() => BaseType)
  async update(
    @Args('id') id: string,
    @Args('updateDto') updateDto: Partial<T>,
  ): Promise<T> {
    return this.service.update(id, updateDto);
  }

  @Mutation(() => BaseType)
  async delete(@Args('id') id: string): Promise<T> {
    return this.service.delete(id);
  }
}