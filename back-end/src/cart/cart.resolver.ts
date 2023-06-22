import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CartType } from './cart.dto';
import { CartService } from './cart.service';

@Resolver()
export class CartResolver {

    constructor(private readonly cartService: CartService) {}

    @Query(returns => [CartType])
    async carts() {
        return this.cartService.findAll();
    }
   @Mutation(returns => CartType)
  async createCart(@Args('input') input:CartType) {
    return this.cartService.create(input);
  }
  @Mutation(returns => CartType)
  async updateCart(@Args('id') id: string, @Args('input') input: CartType) {
  return this.cartService.update(id, input);
 }
  @Mutation(returns => CartType)
  async deleteCart(@Args('id') id: string) {
  return this.cartService.delete(id);
} 

}
