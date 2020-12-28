import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throwError } from 'rxjs';
import { DeleteResult, Repository } from 'typeorm';
import User from '../model/user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

interface CreateUserProps {
  body: CreateUserDto;
}

interface UpdateUserProps {
  body: UpdateUserDto;
  id: string;
}

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  find = async (id?: string | number): Promise<User | User[]> => {
    return id
      ? await this.repo.find({ where: { id: id } })
      : await this.repo.find();
  };

  findOne = async (query): Promise<User> => {
    return await this.repo.findOne({ where: { ...query } });
  };

  create = async ({ body }: CreateUserProps): Promise<User> => {
    const user: User = new User({ ...body });
    return await this.repo.save(user);
  };

  update = async ({ body, id }: UpdateUserProps): Promise<User> => {
    const user: User = await this.repo.findOne({ where: { id: id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const newUser = await this.repo.merge(user, {
      name: body?.name,
      nickname: body?.nickname,
    });
    return await this.repo.save(newUser);
  };

  delete = async (id: string): Promise<User> => {
    const user: User = await this.repo.findOne({ where: { id } });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    try {
      await this.repo.delete(user.id);
      return user;
    } catch (error) {
      throw error;
    }
  };
}
