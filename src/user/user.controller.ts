import { Body, Controller, Delete, Get, Param, Put, UseGuards, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuards } from 'src/auth/jwt-auth.guard';
import { ChangeUserDto } from './dto/change-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@ApiTags('Users')
@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @ApiOperation({summary : 'Get all users from db'})
    @ApiResponse({status: 200, type: [User]})
    @UseGuards(JwtAuthGuards)
    @Get()
    getAll(){
        const user = this.userService.getAllUser();
        return user;
    }

    @ApiOperation({summary : 'Get one users from db'})
    @ApiResponse({status: 200, type: User})
    @UseGuards(JwtAuthGuards)
    @Get(':id')
    getOne(@Param('id') id : number){
        const user = this.userService.getUserById(id);
        return user;
    }

    @ApiOperation({summary : 'Change one user content on db'})
    @ApiResponse({status: 201, type: User})
    @UseGuards(JwtAuthGuards)
    @Put(':id')
    changeOne(@Param('id') id : number, @Body() userDto : ChangeUserDto){
        const user = this.userService.changeUser(id, userDto)
        return user;
    }

    @ApiOperation({summary : 'Delete one user content on db'})
    @ApiResponse({status: 200, type: User})
    @UseGuards(JwtAuthGuards)
    @Delete(':id')
    removeOne(@Param('id') id : number){
        const user = this.userService.remove(id)
        return user;
    }
}
