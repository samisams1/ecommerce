import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { ProductController } from './product/product.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportModule } from './report/report.module';
import { SettingModule } from './setting/setting.module';
import { ShippingModule } from './shipping/shipping.module';
import { AddressModule } from './address/address.module';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    ProductModule, OrderModule, UserModule, CategoryModule, CartModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce'),
    ReportModule,
    SettingModule,
    ShippingModule,
    AddressModule,
    SupplierModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
