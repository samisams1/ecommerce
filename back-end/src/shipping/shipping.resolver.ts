import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ShippingType } from './shipping.dto';
import { ShippingService } from './shipping.service';

@Resolver()
export class ShippingResolver {
    constructor(private readonly shippingService:ShippingService){}
    @Query(returns =>[ShippingType])
    async shippings() {
        return  this.shippingService.findAll();
    }
   @Mutation(returns => ShippingType) 
   async createshipping(@Args('input')  input: ShippingType){
    return this.shippingService.create(input);
   }
}
