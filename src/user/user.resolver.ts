import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryType } from 'src/category/category.dto';
import { UserType } from './user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {

    constructor(private readonly userersvice: UserService) {}

    @Query(returns => [UserType])
    async users() {
        return this.userersvice.findAll();
    }
    @Mutation(returns => UserType)
    async createUser(@Args('input') input:UserType){
        return this.userersvice.create(input);
    }
   @Mutation(returns => UserType) 
    async updateUser(@Args('id') id:string,@Args('input') input:UserType) {
    return this.userersvice.update(id,input);

   }
   @Mutation(returns => UserType)
   async deleteUser(id:string) {
   return this.userersvice.delete(id);
   }
}
