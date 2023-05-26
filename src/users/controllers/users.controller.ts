import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import { UserDto } from '../dtos/user.dto';
import { User } from '../schema/user.schema';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
    constructor(
        private userService: UsersService
    ) {}

    @Get()
    findAllUsers() {
        return this.userService.findAll();
    }

    @Get(':username')
    findOneUser(@Param('username') username: string ): Promise<UserDto> {
        return this.userService.findOneUser(username);
    }

    @Post()
    createOneUser(@Body() createUser: User): Promise<any> {        
        return this.userService.createOneUser(createUser);
    }


}
