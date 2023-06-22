import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { ShippingResolver } from './shipping.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Shipping, ShippingSchema } from './shiping.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Shipping.name,schema:ShippingSchema}])],
  controllers: [ShippingController],
  providers: [ShippingService, ShippingResolver]
})
export class ShippingModule {}
