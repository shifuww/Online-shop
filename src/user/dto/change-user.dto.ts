import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class ChangeUserDto {

    @IsString({message : 'Must be string'})
    @ApiProperty({example: 'exampleLogin', description: 'uniq name for user'})
    login?: string;
    
    @IsEmail({},{message: 'Is must be email'})
    @ApiProperty({example: 'example@gmail.com', description: 'mail'})
    email?: string;

    @IsString({message : 'Must be string'})
    @Length(4, 16, {message : 'Must be more than 4 and less then 16'})
    @ApiProperty({example: 'p23214', description: 'password'})
    password?: string;
}