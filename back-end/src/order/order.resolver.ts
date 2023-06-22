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
    @Mutation(returns => OrderType)
    async updateOrder(@Args('id') id:string,@Args('input') input:OrderType) {
        return  this.orderService.update(id,input);
    }
    @Mutation(returns => OrderType)
    async deleteOrder(@Args('id') id:string) {
    return this.orderService.delete(id);
 }
}


