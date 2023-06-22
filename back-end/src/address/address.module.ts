import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { AddressResolver } from './address.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from './address.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Address.name,schema:AddressSchema}])],
  controllers: [AddressController],
  providers: [AddressService, AddressResolver]
})
export class AddressModule {}
