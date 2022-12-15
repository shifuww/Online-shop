import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { FileModule } from 'src/file/file.module';
import { User } from 'src/user/user.entity';
import { ProductsController } from './products.controller';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([User, Products]),
            FileModule, AuthModule]
})
export class ProductsModule {}
