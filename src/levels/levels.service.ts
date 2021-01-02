import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GoogleCloud } from '../services/google-cloud';
import { Repository } from 'typeorm';
import Level from '../model/level.entity';
import User from '../model/user.entity';
import { UsersService } from '../users/users.service';
import { CreateLevelDto } from './dto/create-level-dto';
import { UpdateLevelDto } from './dto/update-level-dto';

export interface UpdateLevelProps {
  body: UpdateLevelDto;
  id: string;
}

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level) private readonly repo: Repository<Level>,
    private usersService: UsersService,
    private googleCloud: GoogleCloud,
  ) {}

  find = async (query): Promise<Level[]> => {
    return await this.repo.find({ where: { ...query }, relations: ['user'] });
  };

  findOne = async (query): Promise<Level> => {
    return await this.repo.findOne({ where: { ...query } });
  };

  create = async (file, requestUser, body: CreateLevelDto): Promise<Level> => {
    console.log(requestUser);
    let user: User = await this.usersService.findOne({
      id: requestUser.user.id,
    });
    delete user.password;

    if (!file)
      throw new HttpException(
        'Request must contain a Level file',
        HttpStatus.BAD_REQUEST,
      );
    if (!user) throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    const fileUrl = await this.googleCloud.uploadFile(file);
    const level: Level = new Level({
      name: body.name,
      user,
      url: fileUrl,
    });
    await this.repo.save(level);
    return level;
  };

  update = async ({ body, id }: UpdateLevelProps): Promise<Level> => {
    const level: Level = await this.repo.findOne({ where: { id: id } });

    if (!level) {
      throw new HttpException('Level not found', HttpStatus.NOT_FOUND);
    }

    const newLevel = await this.repo.merge(level, {
      name: body?.name,
    });
    return newLevel;
  };
}
