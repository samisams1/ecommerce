import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';

@Module({
  controllers: [AddressController],
  providers: [AddressService, AddressResolver]
})
export class AddressModule {}
