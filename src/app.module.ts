import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import * as path from 'path';
import { User } from './user/user.entity';
import { Products } from './products/products.entity';
import { ProductsModule } from './products/products.module';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath: '.env'}),
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    TypeOrmModule.forRoot({
              type: 'postgres',
              host: process.env.DB_HOST,
              port: Number(process.env.DB_PORT),
              username: process.env.DB_USERNAME,
              password: process.env.DB_PASSWORD,
              database: process.env.DB_NAME,
              entities: [User, Products],
              synchronize: true,
              }),
    MailerModule.forRoot({
              transport:{
                host:process.env.MAIL_HOST,
                auth: {
                  user: process.env.MAIL_USER,
                  pass: process.env.MAIL_PASS
                }
              }
    }),
    UserModule, ProductsModule],
  providers: [],
})
export class AppModule {}
