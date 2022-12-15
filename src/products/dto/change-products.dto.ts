import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ChangeProductsDto{
    
    @ApiProperty({example: 'products', description: 'products name'})
    @IsString({message: 'Must be string'})
    name? : string;

    @ApiProperty({example: 45, description: 'price'})
    @IsNumber({}, {message: "Must be number"})
    price? : number;

    @ApiProperty({example: 'path', description: 'image name'})
    @IsString({message: 'Must be string'})
    image? : string;
}