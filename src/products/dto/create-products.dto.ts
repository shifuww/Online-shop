import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateProductsDto{

    @ApiProperty({example: 'products', description: 'products name'})
    @IsString({message: 'Must be string'})
    readonly name : string;

    @ApiProperty({example: 33, description: 'price'})
    @IsNumber({}, {message: "Must be number"})
    price : number;

    @ApiProperty({example: 'path', description: 'image name'})
    @IsString({message: 'Must be string'})
    image : string;

    @ApiProperty({example: 1, description: 'user.id fk'})
    @IsNumber({}, {message : 'must be number'})
    readonly userId: number;
}