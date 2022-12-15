import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Products {

  @ApiProperty({example: 1, description: 'uniq number'})
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({example: 'name of products', description: 'products name'})
  @Column()
  name: string;

  @ApiProperty({example: 33, description: 'price'})
  @Column()
  price: number;

  @ApiProperty({example: 'path', description: 'image name'})
  @Column()
  image: string;

  @ManyToOne(() => User, (users) => users.id)
  @JoinColumn({name : 'userId'})
  users: User;
  
  @ApiProperty({example: 1, description: 'user.id fk'})
  @Column()
  userId : number;
}