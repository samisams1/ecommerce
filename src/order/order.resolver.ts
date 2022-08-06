import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrderType } from './order.dto';
import { OrderService } from './order.service';

@Resolver()
export class OrderResolver {
    constructor(private readonly orderService: OrderService) {}
    @Query(returns => [OrderType])
    async orders() {
        return this.orderService.findAll();
    }
    @Mutation(returns => OrderType)
    async createOrder(@Args('input') input: OrderType) {
        return this.orderService.create(input);
    }
}


