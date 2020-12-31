import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import Level from '../model/level.entity';
import { LevelsController } from './levels.controller';
import { LevelsService } from './levels.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Level]),
    MulterModule.register({
      dest: '/upload',
    }),
    UsersModule,
  ],
  controllers: [LevelsController],
  providers: [LevelsService],
})
export class LevelsModule {}
