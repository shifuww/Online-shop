import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseGuards, UseInterceptors, UsePipes } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { ChangeProductsDto } from './dto/change-products.dto';
import { CreateProductsDto } from './dto/create-products.dto';
import { Products} from './products.entity'
import { ProductsService } from './products.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {

    constructor(private productsService : ProductsService){}
    
    @ApiOperation({summary : 'Create products'})
    @ApiResponse({status: 201, type: Products})
    @UseGuards(JwtAuthGuards)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createProfile(@Body() dto: CreateProductsDto, @UploadedFile() image){
        return this.productsService.create(dto, image);
    }

    @ApiOperation({summary : 'Change product'})
    @ApiResponse({status: 201, type: Products})
    @UseGuards(JwtAuthGuards)
    @Put(':id')
    @UseInterceptors(FileInterceptor('image'))
    changeProfile(@Param('id') id: number, @Body() dto : ChangeProductsDto, @UploadedFile() image){
        return this.productsService.change(id, dto, image);
    }

    @ApiOperation({summary : 'Get all products'})
    @ApiResponse({status: 200, type: [Products]})
    @UseGuards(JwtAuthGuards)
    @Get()
    getAll(){
        return this.productsService.getAll()
    }

    @ApiOperation({summary : 'Get one product'})
    @ApiResponse({status: 200, type: Products})
    @UseGuards(JwtAuthGuards)
    @Get(':id')
    getOne(@Param('id') id : number){
        return this.productsService.getOne(id);
    }

    @ApiOperation({summary : 'delete product'})
    @ApiResponse({status: 200, type: Products})
    @UseGuards(JwtAuthGuards)
    @Delete(':id')
    removeOne(@Param('id') id : number){
        return this.productsService.remove(id)
    }
}
