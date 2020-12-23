import { Controller, Get, Redirect } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index(): string {
    return this.usersService.auth();
  }
}
