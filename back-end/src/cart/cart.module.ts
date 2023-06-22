import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartResolver } from './cart.resolver';
import { Cart, CartSchema } from './cart.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{name:Cart.name,schema:CartSchema}])],
  controllers: [CartController],
  providers: [CartService, CartResolver]
})
export class CartModule {}
