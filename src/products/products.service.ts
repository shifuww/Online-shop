import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileService } from 'src/file/file.service';
import { Repository } from 'typeorm';
import { ChangeProductsDto } from './dto/change-products.dto';
import { CreateProductsDto } from './dto/create-products.dto';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {

    constructor(@InjectRepository(Products) private productsRepository : Repository<Products>,
                                            private fileService: FileService){}

    async create(dto: CreateProductsDto, image : any){
        const fileName = await this.fileService.createFile(image);
        const post = await this.productsRepository.save({...dto, image : fileName});
        return post;
    }

    async getOne(id : number){
        return this.productsRepository.findOneBy({id});
    }

    async getAll(){
        return this.productsRepository.find();
    }

    async change(id : number, dto : ChangeProductsDto, image : any){
        const profile = await this.getOne(id);
        const fileName = await this.fileService.createFile(image);
        Object.assign(profile, dto)
        profile.price = Number(profile.price)
        const post = await this.productsRepository.save({...profile, image : fileName});
        return post;
    }

    async remove(id: number){
        return this.productsRepository.delete({id});
    }
}
