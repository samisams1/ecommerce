import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './order.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Order.name,schema:OrderSchema}])],
  controllers: [OrderController],
  providers: [OrderService, OrderResolver]
})
export class OrderModule {}
