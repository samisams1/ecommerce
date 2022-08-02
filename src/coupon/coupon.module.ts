import { Module } from '@nestjs/common';
import { CouponController } from './coupon.controller';
import { CouponService } from './coupon.service';
import { CouponResolver } from './coupon.resolver';

@Module({
  controllers: [CouponController],
  providers: [CouponService, CouponResolver]
})
export class CouponModule {}
