import { Body, Controller, Post} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/user.entity';
import { AuthService } from './auth.service';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){}

    @ApiOperation({summary : 'Sing in to user'})
    @ApiResponse({status: 201, type: User})
    @Post('/login')
    login(@Body() userDto: CreateUserDto){
        return this.authService.login(userDto);
    }

    @ApiOperation({summary : 'Sing up to user'})
    @ApiResponse({status: 201, type: User})
    @Post('/reg')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto)
    }
}
