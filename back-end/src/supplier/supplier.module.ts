import { Module } from '@nestjs/common';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { SupplierResolver } from './supplier.resolver';

@Module({
  controllers: [SupplierController],
  providers: [SupplierService, SupplierResolver]
})
export class SupplierModule {}
