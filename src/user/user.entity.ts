
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import { Products } from 'src/products/products.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class User {

  @ApiProperty({example: 1, description: 'uniq number'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'exampleLogin', description: 'uniq name for user'})
  @Column()
  login: string;

  @ApiProperty({example: 'example@gmail.com', description: 'mail'})
  @Column()
  email: string;

  @ApiProperty({example: 'p23214', description: 'password'})
  @Column()
  password: string;

  @OneToMany(() => Products, (product) => product.users)
  profile : Products[];
}