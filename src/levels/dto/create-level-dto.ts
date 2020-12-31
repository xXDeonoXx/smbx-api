import { IsNotEmpty, IsEmail, IsUrl } from 'class-validator';

export class CreateLevelDto {
  @IsNotEmpty() name: string;
  @IsNotEmpty() @IsUrl() url: string;
}
