import { Controller, Get } from '@nestjs/common';
import User from 'src/model/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index(): string {
    return 'im alive';
  }
  @Get('/generate-admin')
  generateAdmin(): Promise<User> {
    return this.usersService.generateAdmin();
  }
}
