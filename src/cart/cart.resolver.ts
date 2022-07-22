import { Query, Resolver } from '@nestjs/graphql';
import { CartType } from './cart.dto';
import { CartService } from './cart.service';

@Resolver()
export class CartResolver {

    constructor(private readonly cartService: CartService) {}

    @Query(returns => [CartType])
    async carts() {
        return this.cartService.findAll();
    }


}
