import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { UserDto } from '../dtos/user.dto';
import { User } from '../schema/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name)
        private readonly usersModel: Model<User>,       
    ) {}

    async findAll(): Promise<any> {
        return this.usersModel.find().exec();
      }



    async createOneUser(createUserDto: UserDto ): Promise<User> {
        const createUser = new this.usersModel(createUserDto);
        return createUser.save();
    }

    async findOneUser(username: string ): Promise<User> {
        return await this.usersModel.findById(username).exec();
    }
}
