import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import User from 'src/model/user.entity';
import { DeleteResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UsersService } from './users.service';

@Controller('users')
@UseInterceptors(ClassSerializerInterceptor)
export class UsersController {
  constructor(private usersService: UsersService) {}

  // Get all users
  @Get()
  getAll(): Promise<User | User[]> {
    return this.usersService.find();
  }

  // Get User by id
  @Get(':id')
  getById(@Param('id') id: string): Promise<User | User[]> {
    return this.usersService.find(id);
  }

  // Create new User
  @Post()
  create(@Body() body: CreateUserDto): Promise<User> {
    return this.usersService.create({ body });
  }

  // Update User
  @Patch(':id')
  update(@Body() body: UpdateUserDto, @Param('id') id: string): Promise<User> {
    return this.usersService.update({ body, id });
  }

  // Delete User by id
  @Delete(':id')
  delete(@Param('id') id: string): Promise<User> {
    return this.usersService.delete(id);
  }
}
