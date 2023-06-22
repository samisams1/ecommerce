import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Category, CategorySchema } from './category.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Category.name,schema:CategorySchema}])],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryResolver]
})
export class CategoryModule {}



