import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../model/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {} // @InjectRepository(User) private readonly repo: Repository<User>,

  index = (): string => {
    return 'using service';
  };

  generateAdmin = async (): Promise<User> => {
    const admin = new User();
    admin.name = 'admin';
    admin.email = 'admin@email.com';
    admin.password = 'admin';
    admin.nickname = 'ademir';
    return await this.repo.save(admin);
  };
}
