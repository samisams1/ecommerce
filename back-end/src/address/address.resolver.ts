import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AddressType } from './address.dto';
import { AddressService } from './address.service';


@Resolver()
export class AddressResolver {
    constructor(private readonly addressService: AddressService) {}

    @Query(returns => [AddressType])
    async address() {
        return this.addressService.findAll();
    }   
    @Mutation(returns => AddressType)
    async createAddress(@Args('input') input: AddressType){
        return this.addressService.create(input);
    }
    @Mutation(returns => AddressType)
    async updateAddress(@Args('id') id: string, @Args('input') input: AddressType) {
    return this.addressService.update(id, input);
   }
    @Mutation(returns => AddressType)
    async deleteAddress(@Args('id') id: string) {
    return this.addressService.delete(id);
}   
}