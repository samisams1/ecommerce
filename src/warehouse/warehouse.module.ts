import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseService } from './warehouse.service';
import { WarehouseResolver } from './warehouse.resolver';

@Module({
  controllers: [WarehouseController],
  providers: [WarehouseService, WarehouseResolver]
})
export class WarehouseModule {}
