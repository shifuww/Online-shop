import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangeUserDto } from './dto/change-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private userRepository : Repository<User>){}

    async createUser(userDto : CreateUserDto){
        
        return this.userRepository.save(userDto);
    }

    async getAllUser(){
        return this.userRepository.find();
    }

    async getUserByLogin(login : string){
        const user = await this.userRepository.findOne({where: {login}});
        return user;
    }

    async getUserById(id : number){
        const user = await this.userRepository.findOneBy({id});
        return user;
    }

    async changeUser(id : number, dto : ChangeUserDto){
        const user = await this.userRepository.findOneBy({id});
        Object.assign(user, dto);
        return await this.userRepository.save(user)
    }

    async remove(id : number){
        return await this.userRepository.delete({id});
    }
}
