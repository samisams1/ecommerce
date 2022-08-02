import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { ShippingResolver } from './shipping.resolver';

@Module({
  controllers: [ShippingController],
  providers: [ShippingService, ShippingResolver]
})
export class ShippingModule {}
