import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import Level from '../model/level.entity';
import { UpdateLevelDto } from './dto/update-level-dto';
import { LevelsService } from './levels.service';

@Controller('levels')
export class LevelsController {
  constructor(private levelsService: LevelsService) {}

  // Get all users
  @Get()
  getAll(): Promise<Level[]> {
    return this.levelsService.find({});
  }

  // Get User by id
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: string): Promise<Level | Level[]> {
    return this.levelsService.findOne({ id });
  }

  // Create new User
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @UseGuards(JwtAuthGuard)
  async create(
    @UploadedFile() file,
    @Req() request,
    @Body() body,
  ): Promise<Level> {
    return await this.levelsService.create(file, request.user, body);
  }

  // Update Level
  @Patch(':id')
  update(
    @Body() body: UpdateLevelDto,
    @Param('id') id: string,
  ): Promise<Level> {
    return this.levelsService.update({ body, id });
  }

  // // Delete Level by id
  // @Delete(':id')
  // delete(@Param('id') id: string): Promise<Level> {
  //   return this.levelsService.delete(id);
  // }
}
